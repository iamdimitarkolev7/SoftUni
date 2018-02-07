function ticketPrizeCalculation(arr) {

    let title = String(arr[0]).toLowerCase();
    let day = String(arr[1]).toLowerCase();

    let prize = 0;

    if(title === 'the godfather'){

        switch (day){
            case 'monday':
                prize=12;
                break;
            case 'tuesday':
                prize=10;
                break;
            case 'wednesday':
                prize=15;
                break;
            case 'thursday':
                prize=12.50;
                break;
            case 'friday':
                prize=15;
                break;
            case 'saturday':
                prize=25;
                break;
            case 'sunday':
                prize=30;
                break;
        }
    } else if(title === 'schindler\'s list'){

        switch (day){
            case 'monday':
                prize=8.50;
                break;
            case 'tuesday':
                prize=8.50;
                break;
            case 'wednesday':
                prize=8.50;
                break;
            case 'thursday':
                prize=8.50;
                break;
            case 'friday':
                prize=8.50;
                break;
            case 'saturday':
                prize=15;
                break;
            case 'sunday':
                prize=15;
                break;
            default:
                console.log('error');
                return;
        }
    } else if(title === 'casablanca'){

        switch (day){
            case 'monday':
                prize=8;
                break;
            case 'tuesday':
                prize=8;
                break;
            case 'wednesday':
                prize=8;
                break;
            case 'thursday':
                prize=8;
                break;
            case 'friday':
                prize=8;
                break;
            case 'saturday':
                prize=10;
                break;
            case 'sunday':
                prize=10;
                break;
            default:
                console.log('error');
                return;
        }
    }else if(title === 'the wizard of oz'){

        switch (day){
            case 'monday':
                prize=10;
                break;
            case 'tuesday':
                prize=10;
                break;
            case 'wednesday':
                prize=10;
                break;
            case 'thursday':
                prize=10;
                break;
            case 'friday':
                prize=10;
                break;
            case 'saturday':
                prize=15;
                break;
            case 'sunday':
                prize=15;
                break;
            default:
                console.log('error');
                return;
        }
    }else{
        console.log('error');
        return;
    }

    if(prize!=0){
        console.log(prize);
    }else{
        console.log('error');
    }

}