import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "userExtract"
})

export class UserExtractPipe implements PipeTransform{
    transform(value: any, arg):any{
        //throw new Error('Method not implemend.');
        let newVal: any;
        if(arg == "DD/LL/AA"){
            //Recibe: date:"17/09/1988"
            //retorna 17/SEP/89

            var data = value.date.split("/");
            if(data[1] == "01"){
                newVal = data[0] + "/" + "Ene/" + data[2];
            }else if(data[1] == "02"){
                newVal = data[0] + "/" + "Feb/" + data[2];
            }else if(data[1] == "03"){
                newVal = data[0] + "/" + "Mar/" + data[2];
            }else if(data[1] == "04"){
                newVal = data[0] + "/" + "Abr/" + data[2];
            }else if(data[1] == "05"){
                newVal = data[0] + "/" + "May/" + data[2];
            }else if(data[1] == "06"){
                newVal = data[0] + "/" + "Jun/" + data[2];
            }else if(data[1] == "07"){
                newVal = data[0] + "/" + "Jul/" + data[2];
            }else if(data[1] == "08"){
                newVal = data[0] + "/" + "Ago/" + data[2];
            }else if(data[1] == "09"){
                newVal = data[0] + "/" + "Sep/" + data[2];
            }else if(data[1] == "10"){
                newVal = data[0] + "/" + "Oct/" + data[2];
            }else if(data[1] == "11"){
                newVal = data[0] + "/" + "Nov/" + data[2];
            }else{
                newVal = data[0] + "/" + "Dic/" + data[2];
            }
            


        }else if(arg == "AA/MM/DD"){
            //Recibe: date:"17/09/1988"
            //retorna 89/09/17

            var data = value.date.split("/");
            var yy = data[2].split("");

            newVal = yy[2] +yy[3] + "/" + data[1] + "/"+data[0];
            




        }else if(arg == "AAAA/LL/DD"){
            //Recibe: date:"17/09/1988"
            //retorna 1989/SEP/17

            var data = value.date.split("/");
            if(data[1] == "01"){
                newVal = data[2] + "/" + "Ene/" + data[0];
            }else if(data[1] == "02"){
                newVal = data[2] + "/" + "Feb/" + data[0];
            }else if(data[1] == "03"){
                newVal = data[2] + "/" + "Mar/" + data[0];
            }else if(data[1] == "04"){
                newVal = data[2] + "/" + "Abr/" + data[0];
            }else if(data[1] == "05"){
                newVal = data[2] + "/" + "May/" + data[0];
            }else if(data[1] == "06"){
                newVal = data[2] + "/" + "Jun/" + data[0];
            }else if(data[1] == "07"){
                newVal = data[2] + "/" + "Jul/" + data[0];
            }else if(data[1] == "08"){
                newVal = data[2] + "/" + "Ago/" + data[0];
            }else if(data[1] == "09"){
                newVal = data[2] + "/" + "Sep/" + data[0];
            }else if(data[1] == "10"){
                newVal = data[2] + "/" + "Oct/" + data[0];
            }else if(data[1] == "11"){
                newVal = data[2] + "/" + "Nov/" + data[0];
            }else{
                newVal = data[2] + "/" + "Dic/" + data[0];
            }
        }
        else if(arg == "DD/LL/AAAA"){
            //Recibe: date:"17/09/1988"
            //retorna 17/Sep/1988

            var data = value.date.split("/");
            if(data[1] == "01"){
                newVal = data[0] + "/" + "Ene/" + data[2];
            }else if(data[1] == "02"){
                newVal = data[0] + "/" + "Feb/" + data[2];
            }else if(data[1] == "03"){
                newVal = data[0] + "/" + "Mar/" + data[2];
            }else if(data[1] == "04"){
                newVal = data[0] + "/" + "Abr/" + data[2];
            }else if(data[1] == "05"){
                newVal = data[0] + "/" + "May/" + data[2];
            }else if(data[1] == "06"){
                newVal = data[0] + "/" + "Jun/" + data[2];
            }else if(data[1] == "07"){
                newVal = data[0] + "/" + "Jul/" + data[2];
            }else if(data[1] == "08"){
                newVal = data[0] + "/" + "Ago/" + data[2];
            }else if(data[1] == "09"){
                newVal = data[0] + "/" + "Sep/" + data[2];
            }else if(data[1] == "10"){
                newVal = data[0] + "/" + "Oct/" + data[2];
            }else if(data[1] == "11"){
                newVal = data[0] + "/" + "Nov/" + data[2];
            }else{
                newVal = data[0] + "/" + "Dic/" + data[2];
            }
        }
        return newVal;
    }
}