import { Dimensions, NativeModules, Platform } from "react-native";
import {
    getUniqueId,
    getBrand,
    getModel,
    getSystemName,
    getSystemVersion,
    getVersion,
} from 'react-native-device-info';
import { HTTP_HEADER_FORM_DATA, HTTP_HEADER_VALUE_JSON, REST_METHOD_GET, REST_METHOD_POST, REST_METHOD_PUT } from "./constants";
import { getLocales, getTimeZone } from 'react-native-localize';
import { REST_BASE_URL } from "./api";
import LocalizedString from "./localization";

export const ios = Platform.OS === 'ios';
export const android = Platform.OS === 'android';

export const getScreenDimensionHeight = () => Dimensions.get('window').height;
export const getScreenDimensionWidth = () => Dimensions.get('window').width;

export const sortAsc = (a: any, b: any) => (a > b ? 1 : -1);
export const sortDesc = (a: any, b: any) => (a > b ? -1 : 1);

export const getHttpHeaders = async (authenticationToken: string, fcmToken: string) => {
    const locales = getLocales();
    const language = locales && locales.length > 0 ? locales[0].languageTag : '';
    // if (!messaging().isDeviceRegisteredForRemoteMessages) {
    //     await messaging().registerDeviceForRemoteMessages();
    // }
    let headers: { [key: string]: string | Promise<string> } = {
        'Accept-Language': language,
        'Content-Type': HTTP_HEADER_VALUE_JSON,
        'X-DeviceId': getUniqueId(),
        'X-DeviceManufacturer': getBrand(),
        'X-DeviceModel': getModel(),
        'X-TimeZone': getTimeZone(),
        'X-OSName': getSystemName(),
        'X-OSVersion': getSystemVersion(),
        'X-AppVersion': getVersion(),
        'X-FCMToken': fcmToken,
    };

    if (authenticationToken) {
        headers = { ...headers, Authorization: authenticationToken};
    }
    return headers;
};

const getHttpHeadersWithoutToken = async () => {
    const locales = getLocales();
    const language = locales && locales.length > 0 ? locales[0].languageTag : '';
    // if (!messaging().isDeviceRegisteredForRemoteMessages) {
    //     await messaging().registerDeviceForRemoteMessages();
    // }
    let headers: { [key: string]: string | Promise<string> } = {
        'Accept-Language': language,
        'Content-Type': HTTP_HEADER_VALUE_JSON,
        'X-DeviceId': getUniqueId(),
        'X-DeviceManufacturer': getBrand(),
        'X-DeviceModel': getModel(),
        'X-TimeZone': getTimeZone(),
        'X-OSName': getSystemName(),
        'X-OSVersion': getSystemVersion(),
        'X-AppVersion': getVersion(),
        // 'X-FCMToken': fcmToken,
    };

    return headers;
};

const getHttpHeadersFormData = async (authenticationToken: string, fcmToken: string) => {
    const locales = getLocales();
    const language = locales && locales.length > 0 ? locales[0].languageTag : '';
    // if (!messaging().isDeviceRegisteredForRemoteMessages) {
    //     await messaging().registerDeviceForRemoteMessages();
    // }
    let headers: { [key: string]: string | Promise<string> } = {
        'Accept-Language': language,
        'Content-Type': HTTP_HEADER_FORM_DATA,
        'X-DeviceId': getUniqueId(),
        'X-DeviceManufacturer': getBrand(),
        'X-DeviceModel': getModel(),
        'X-TimeZone': getTimeZone(),
        'X-OSName': getSystemName(),
        'X-OSVersion': getSystemVersion(),
        'X-AppVersion': getVersion(),
        // 'X-FCMToken': fcmToken,
    };

    if (authenticationToken && fcmToken) {
        headers = { ...headers, Authorization: authenticationToken, 'X-FCMToken': fcmToken };
    }
    return headers;
};


export const sendGetRequest = async (
    apiPath: string,
    authenticationToken: string,
    fcmtoken: string,
    customBaseUrl?: string | undefined,
) => {
    const headersObj = new Headers();
    const method = REST_METHOD_GET;
    const url = customBaseUrl ? `${customBaseUrl}${apiPath}` : `${REST_BASE_URL}${apiPath}`;

    const headers = await getHttpHeaders(authenticationToken, fcmtoken);
    for (const key in headers) {
        const value = await headers[key];
        headersObj.append(key, value);
    }

    const response = await fetch(url, { method, headers: headersObj });
    return processResponse(response);
};

export const sendPostRequest = async (
    apiPath: string,
    body: any,
    authenticationToken: string,
    fcmtoken: string,
    customBaseUrl?: string | undefined,
) => {
    const headersObj = new Headers();
    const bodyStr = JSON.stringify(body);
    const method = REST_METHOD_POST;
    const url = customBaseUrl ? `${customBaseUrl}${apiPath}` : `${REST_BASE_URL}${apiPath}`;

    const headers = await getHttpHeaders(authenticationToken, fcmtoken);
    for (const key in headers) {
        const value = await headers[key];
        headersObj.append(key, value);
    }

    const response = await fetch(url, { method, headers: headersObj, body: bodyStr ? bodyStr : '' });
    return processResponse(response);
};

export const sendPostRequestWithoutHeader = async (
    apiPath: string,
    body: any,
    customBaseUrl?: string | undefined,
) => {
    const headersObj = new Headers();
    const bodyStr = JSON.stringify(body);
    const method = REST_METHOD_POST;

    const headers = await getHttpHeadersWithoutToken();
    for (const key in headers) {
        const value = await headers[key];
        headersObj.append(key, value);
    }

    const url = customBaseUrl ? `${customBaseUrl}${apiPath}` : `${REST_BASE_URL}${apiPath}`;

    const response = await fetch(url, { method, body: body ? bodyStr : '', headers: { 'Content-Type': HTTP_HEADER_VALUE_JSON, } });
    return processResponse(response);
};

export const sendPutRequest = async (
    apiPath: string,
    body: any,
    authenticationToken: string,
    fcmtoken: string,
    customBaseUrl?: string | undefined,
) => {
    const headersObj = new Headers();
    const bodyStr = JSON.stringify(body);
    const method = REST_METHOD_PUT;
    const url = customBaseUrl ? `${customBaseUrl}${apiPath}` : `${REST_BASE_URL}${apiPath}`;

    const headers = await getHttpHeaders(authenticationToken, fcmtoken);
    for (const key in headers) {
        const value = await headers[key];
        headersObj.append(key, value);
    }

    const response = await fetch(url, { method, headers: headersObj, body: bodyStr ? bodyStr : '' });
    return processResponse(response);
};

const processResponse = async (response: any) => {    
    if (response.status === 404 || response.status === 500) {
        throw new Error(`${LocalizedString.common.errMsgMokIssue} \n${LocalizedString.common.labelCode}: ${response.status}`);
    }

    const responseJSON = await response.json();
    if (response.status >= 200 && response.status <= 299) {
        return responseJSON;
    }

    if (responseJSON.message_type === 2 || responseJSON.status === 501) {
        throw new Error(`${LocalizedString.common.errMsgMokIssue} \n${LocalizedString.common.labelCode}: ${responseJSON.status}`);
    }

    const errorMessage = responseJSON ? (responseJSON.Message || responseJSON.message) : '';
    throw new Error(errorMessage);
};