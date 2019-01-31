export default class Date {

    private _year: number
    private _month: number
    private _day: number

    constructor(year: number, month:number, day: number){
        this._day = day
        this._month = month
        this._year = year
    }


toString() {
		let date  = new Date()
		console.log(date);
	}

	create(y: number,m: number,d: number) {

		let concat =  ""+y+"-"+m+"-"+d
		let date  = new Date(concat)
		let finalDate = toLocalString(date);;
		return finalDate;
	}
	setDate(y: number,m: number,d: number) {

		let concat =  ""+y+"-"+m+"-"+d
		let date  = new Date(concat)
		let finalDate = toLocalString(date);;
		return finalDate;
	}

	yesterday() {
		var dateJour = new Date();

		dateJour.setDate(dateJour.getDate() - 1)

		let  finalDate = toLocalString(dateJour);
		console.log(finalDate);
		return finalDate;
	}

	tomorrow() {
		var dateJour = new Date();

		dateJour.setDate(dateJour.getDate() + 1)

		let  finalDate = toLocalString(dateJour);
		console.log(finalDate);
		return finalDate;
	}
	addDay(annee : number = 1) {
		
		return annee;
	}
    //Le reste n'est pas au programme. T'aurais dû me donner ces classes vu qu'elles sont nécessaires à l'exo3

}

function toLocalString (date:Date){

	let endDate = new Date(date.getDate() + 1);
	
	let jour = date.getDate();
	let mois:any = date.getMonth();
	let annee = date.getFullYear();
	mois  =  mois + 1;
	if(mois.toString.length == 1 ){
		let finalDate =  ""+annee+"-0"+mois+"-"+jour
		//console.log(finalDate);
		return finalDate;
	}

	let finalDate =  ""+annee+"-"+mois+"-"+jour;

	return finalDate;
}
