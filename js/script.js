
let gun = 
let ay = 

if ((( gun > 22 && gun <= 31 ) && ay == 12) || (gun < 21 && ay == 1))
{
    console.log("Burcunuz=OĞLAK");
}

else if ((( gun > 20 && gun <= 31 ) && ay == 1) || (gun < 19 && ay == 2))
{
    console.log("Burcunuz=KOVA");
}

else if ((( gun > 18 && gun <= 29 ) && ay == 2) || (gun < 21 && ay == 3))
{
    console.log("Burcunuz=BALIK");
}

else if ((( gun > 20 && gun <= 31 ) && ay == 3) || (gun < 21 && ay == 4))
{
    console.log("Burcunuz=KOÇ");
}

else if ((( gun > 20 && gun <= 30 ) && ay == 4) || (gun < 21 && ay == 5))
{
    console.log("Burcunuz=BOĞA");
}

else if ((( gun > 20 && gun <= 31 ) && ay == 5) || (gun < 22 && ay == 6))
{
    console.log("Burcunuz=İKİZLER");
}

else if ((( gun > 21 && gun <= 30 ) && ay == 6) || (gun < 23 && ay == 7))
{
    console.log("Burcunuz=YENGEÇ");
}

else if ((( gun > 22 && gun <= 31 ) && ay == 7) || (gun < 23 && ay == 8))
{
    console.log("Burcunuz=ASLAN");
}

else if ((( gun > 22 && gun <= 31 ) && ay == 8) || (gun < 23 && ay == 9))
{
    console.log("Burcunuz=BAŞAK");
}

else if ((( gun > 22 && gun <= 30 ) && ay == 9) || (gun < 24 && ay == 10))
{
    console.log("Burcunuz=TERAZİ");
}

else if ((( gun > 23 && gun <= 31 ) && ay == 10) || (gun < 23 && ay == 11))
{
    console.log("Burcunuz=AKREP");
}

else if ((( gun > 22 && gun <= 30 ) && ay == 11) || (gun < 22 && ay == 12))
{
    console.log("Burcunuz=YAY");
}

else
{
    console.log("Geçersiz işlem");
}