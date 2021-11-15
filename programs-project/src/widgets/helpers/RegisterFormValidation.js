import _isEmpty from 'lodash/isEmpty';

export default function validate(user) {
    var errors = {}
    if (_isEmpty(user.Uemail.trim())) {
        errors.email = "הכנס מייל";
    } else if (!(new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
     ).test(user.Uemail))) {
        errors.email = "מייל לא חוקי";
    }
    if (_isEmpty(user.Upassword.trim())) {
        errors.password = "הכנס סיסמה";
    } else if (user.Upassword.length < 8) {
        errors.password = "השתמש בשמונה תווים או יותר לסיסמה שלך";
    } else if (!/\d/.test(user.Upassword)) {
        errors.password = "עליך לנסות סיסמה חזקה יותר, השתמש במספר אחד לפחות";
    } else if (!/[A-z]/.test(user.Upassword)) {
        errors.password = "עליך לנסות סיסמה חזקה יותר, השתמש באות אחת לפחות";
    }else if(!(new RegExp('^(?=.?[A-z])(?=.*[0-9]).{6,}$').test(user.Upassword))){
        errors.password = "סיסמה לא חוקית";
    } else {
        errors.Upassword = "";
    }
    errors.username = _isEmpty(user.UuserName.trim()) ? "הכנס שם משתמש" : "";
    errors.firstName = _isEmpty(user.UfirstName.trim()) ? "הכנס שם פרטי" : "";
    errors.lastName = _isEmpty(user.UlastName.trim()) ? "הכנס שם משפחה" : "";
    errors.address = _isEmpty(user.Uaddress.trim()) ? "הכנס כתובת" : "";
    errors.phone = _isEmpty(user.Uphone.trim()) ? "הכנס מספר טלפון" : "";
    //if(!^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$user.Uphone)
    return errors;
}
