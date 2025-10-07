import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    input : {
      width: '100%',
      backgroundColor: COLORS.white,
      padding: 10,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: COLORS.lightGray
    },
    label : {
        textAlign: 'left',
        marginLeft: 5,
        color : COLORS.darkgray,
        fontSize: FONT_SIZE.md,
        marginBottom: 4
    }
}