
function password(obj) {
    if(!obj.name || !obj.siteName || !obj.birthYear || obj.birthYear.toString().length !==4 ){
        return 'invalid';
    }
    const userName= obj.name;
    const userSiteName= obj.siteName;
    const userBirthyear= obj.birthYear;

    const str =userSiteName.split("");
    str[0] = str[0].toUpperCase();
    const site = str.join("");
    const result = site+ "#"+userName+"@"+userBirthyear;
    return result;
    }
    console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" } ));