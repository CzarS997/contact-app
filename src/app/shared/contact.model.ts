export class Contact{

    logsInfo: object;
    constructor(public name: string, public digits: number){
        
        this.name = name;
        this.digits = digits;
        this.logsInfo = {
            call1: [this.randomDate(), Math.floor(Math.random() * 300)+1],
            call2: [this.randomDate(), Math.floor(Math.random() * 300)+1]
        }
    };

    randomDate(): string{

        let year = Math.floor(Math.random()*10) + 2010;
        let month = Math.floor(Math.random()*11)+1;
        let day;
        let xD = new Date(Math.floor(Math.random()*100000000000)+ 1480000000000);
        if(month === 2){
            day = Math.floor(Math.random() * 28)+1;
        }else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
            day = Math.floor(Math.random() * 31) + 1;
        }else{
            day = Math.floor(Math.random()* 30)+1;
        }
        //return new Date(`${year}-${month}-${day}`).toLocaleString();
        return xD.toLocaleString();
    }

    
    
}