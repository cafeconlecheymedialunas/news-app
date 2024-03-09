import React from 'react';
import { NativeBaseProvider, ScrollView } from 'native-base';

export default function Layout({ children }) {
    return (
        <NativeBaseProvider>
            <ScrollView height={850}>
                {children}
            </ScrollView>
        </NativeBaseProvider>
    );
}