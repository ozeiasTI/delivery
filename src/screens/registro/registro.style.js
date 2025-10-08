import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container : {
       flex : 1,
       padding: 40,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: COLORS.white

    },
    form : {
        width : '100%',
        marginBottom: 20
    },
    formGroup: {
        width: '100%',
        marginTop : 25,
        marginBottom: 40
    },
    footer : {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        marginBottom: 25
    },
    footerText : {
        textAlign: 'center',
        color: COLORS.darkgray,
        fontSize: FONT_SIZE.md
    }
}