// libraries
import React from 'react'

// components
import { AppleLogo, COLORS, GoogleLogo } from '../../atoms';

export const TEXTS: any = {
    google: 'Entrar com uma conta Google',
    apple: 'Entrar com uma conta Apple'
}

export const LOGOS: any = {
    apple: <AppleLogo/>,
    google: <GoogleLogo/>
}

export const _COLORS: any = {
    buttonBg: {
        google: COLORS.backgroundLightOne,
        apple: COLORS.backgroundLightTwo,
    },
    text: {
        google: COLORS.textForLightBg,
        apple: COLORS.textForDarkBg,
    },
    background: {
        google: COLORS.backgroundLight,
        apple: COLORS.backgroundDark,
    }
}