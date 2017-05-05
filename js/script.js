var numAgeMin = 18,
    strAdmin = 'admin',
    strAdmPassword = '123456';

var numAge,
    strName,
    strPassword;

while (true){
    numAge = prompt("Сколько вам лет:", "");
    if (typeof(numAge) == "object"){
       document.write('<h2>Выполнение прервано пользователем<h2>');
       break;
    };

    console.log(isNaN(numAge));
    if (isNaN(numAge)){
       alert("Можно вводить только цифры...");
       continue;    
    };
    
    document.write('<h2>Возраст пользователя - ' + numAge + '<h2>');  
    if (numAge < numAgeMin){
        alert("Вы - несовершеннолетний...");
        document.write('<h2>Пользователь несовершеннолетний<h2>');
        break;    
    };
    
    strName = prompt("Ваше имя:", "");    
    if (typeof(strName) == "object")
        continue;
    
    if (strName != strAdmin){
        document.write('<h2>Пользователь ' + strName + ' подключился к системе<h2>');
        break;
    };    

    for (i = 1; i <= 3; i++) {
        strPassword = prompt("Пароль", "");
        if (strPassword == strAdmPassword){
            document.write('<h2>Пользователь ' + strName + ' - администратор системы<h2>');
            break;
        }
        else{
            if (i==3)
                document.write('<h2>Пользователь ' + strName + ' ввел неверный пароль<h2>');                
            else     
                alert("Пароль неверен. Осталось [" + (3-i) + "] попытка...");
        };
    }; // for
    break;      
};