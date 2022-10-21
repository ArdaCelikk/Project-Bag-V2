function open(canta,choice,choice2){
    for(;;)
    {
        choice= prompt("Çantada ne yapmak istiyorsunuz? (Bakmak,Eklemek,Kapat)")
        if(choice=="Eklemek" && bag.length<7)
        {
            for(let y=0; y<7;y++)
            {
                choice2=prompt("Eklemek istediğiniz eşya:" , "Eşya")
                if(choice2=="Bırak")
                {
                    break;
                }
                else if(bag.length>=7)
                {
                    break;
                }
                else
                {
                    bag.push(choice2)
                }
            }
            
        }

        else if(choice=="Eklemek" && bag.length>7)
        {
            alert("Çanta dolu!!!")
        }

        else if(choice=="Bakmak")
        {
            for(let j=0;j<bag.length;j++)
            {
                console.log(bag[j])
            }
        }

        else if(choice=="Kapat")
        {
            break;
        }

        else
        {
            alert("Geçersiz değer girdiniz!! (Bakmak,Eklemek,Kapat)")
        }

    }
}