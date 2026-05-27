const lyrics: string[] = [
    "",
    "Pal-pal jeena muhaal mera tere bina",
    "Yeh saaray nashay bekaar teri aankhon ke siwa",
    "Ghar nahi jaata, mein bahar, rehta tera intezaar",
    "Mere khuwabon may aa naa kar ke solah singhaar",
    "",
    "Mein ab kyun hosh may aata nahi?",
    "Sukoon yeh dil kyun paata nahi?",
    "Kyun torrun khud se jo thay waaday",
    "Ke ab yeh ishq nibhaana nahi?",
    "Mein morrun tum se jo yeh chehra",
    "Dobara nazar milana nahi",
    "Yeh duniya jaanay mera dard",
    "Tujhe yeh nazar kyun aata nahi?",
    "",
    "Sohneya, yoon tera sharmana meri jaan naa lele",
    "Kaan ke peeche zulf chhupana, meri jaan, kya kehne",
    "Zaalima, tauba tera nakhra, iss ke waar, kya kehne",
    "Thaam ke bethe dil ko ghaayal, kahin haar naa bethein",
    "Teri nazrein mujh se kya kehti hain?",
    "Inn may wafa behti hai",
    "Thori-thori si raazi, thori si khafa rehti hain",
    "Loug hain zaalim baray, inn may jafaa dekhi hai",
    "Yeh duniya teri nahi, mein ne tujh may hayaa dekhi hai"
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function singLyrics() {

    for (const line of lyrics) {
        if (line === "") {
            console.log();
            await delay(1500);
            continue;
        }

        for (const char of line) {
            process.stdout.write(char);
            await delay(100);
        }

        console.log();
        await delay(500);
    }

    console.log("\n ~ Remal ~ ");
}

singLyrics();