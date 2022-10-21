let bag= []
let full=false
let secim
let secim2
let secim3

for(;;)
{
    secim= prompt("Ne yapmak istiyorsunuz? (Aç/Kapat):",)
    if(secim=="Aç")
    {
        open(bag,secim2,secim3)
    }
    else if(secim=="Kapat")
    {
        alert("Çanta zaten kapalı!!!!")
    }
    else
    {
        alert("Geçersiz değer girdiniz!!! (Aç/Kapat)")
    }
}