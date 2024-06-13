import { Button, Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { BaseScreenWithNavbar, LargeText, MediumText } from '../../../../globalComponents'

const ProfileScreen: React.FC<ProfileScreenPropps> = ({ profile, loading, onLogout }) => {
    return (
        <BaseScreenWithNavbar activeId={3}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} >
                <View style={{ marginTop: 100, marginBottom: 20, alignItems: 'center' }}>
                    <Image src={profile.profilePicture} style={{ height: 100, width: 100, borderRadius: 50 }} />
                    <LargeText bold label={profile.name} textAlign='center' />
                </View>

                <ScrollView>
                    {profile.generalBar.map((item) => (
                        <View style={{ flexDirection: 'row' }}>
                            <MediumText label={`${item.label}`} customStyle={{ width: 150 }} />
                            <View style={{ flexDirection: 'row' }}>
                                <MediumText label=":" customStyle={{ marginRight: 10 }} />
                                <MediumText label={`${item.value}`} />
                            </View>
                        </View>

                    ))}
                    <View style={{ borderWidth: 0.5, marginVertical: 10 }} />
                    {profile.generalInfo.map((item) => (
                        <View style={{ flexDirection: 'row' }}>
                            <MediumText label={`${item.label}`} customStyle={{ width: 150 }} />
                            <View style={{ flexDirection: 'row' }}>
                                <MediumText label=":" customStyle={{ marginRight: 10 }} />
                                <MediumText label={item.value ? `${item.value}` : '-'} />
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <Button title="Logout" onPress={onLogout} />
            </View >
        </BaseScreenWithNavbar >
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})