<script lang="ts">
  import Timeline from "$lib/components/Timeline.svelte";

  const events2023 = [
    {
      date: "Feb 2022",
      title: "First time perceiving you",
    },
    {
      date: "Apr 2022",
      title: "First VSA family night with you",
    },
    {
      date: "Oct 2022",
      title: "Joining VSA and first time meeting you",
    },
    {
      date: "Oct 16 2022",
      title: "ACE reveal and our first selfie together"
    },
    {
      date: "Nov 2022",
      title: "First time sleeping over cuz I lost my keys",
    },
    {
      date: "Feb 17 2023",
      title: "Going to your 21st bday party",
    },
    {
      date: "April 1 2023",
      title: "Second family night with you",
    },
    {
      date: "Apr 13 2023",
      title: "Start of the lonely bois, first time really talking to you",
    },
    {
      date: "May 4 2023",
      title: "Day I edited the Vietnam trip video for you",
    },
    {
      date: "May 18 2023",
      title: "Invited over for sushi bake, our first Kdrama night",
    },
    {
      date: "May 19 2023",
      title: "My 20th birthday and lunch + cake with you",
    },
    {
      date: "May/Jun 2023",
      title: "Our first FaceTime call (with Vinh)"
    },
    {
      date: "Jun 15 2023",
      title: "Joined your rat dog discord."
    },
    {
      date: "Jun 29 2023",
      title: "Release of Seven and interestingly watching you watch the music video..."
    },
    {
      date: "July 25 2023",
      title: "The day you won the Rising Star award..."
    },
    {
      date: "Aug 25 2023",
      title: "My insta post and the day I got clowned for the thirst traps"
    },
    {
      date: "Aug 26 2023",
      title: "The day you, Vinh, and Michelle sat on my bed"
    },
    {
      date: "Aug 28 2023",
      title: "The day I saw you again after the summer. Also my first workout with you"
    }, 
    {
      date: "Sep 1 2023",
      title: "First VSA fam hangout after the summer"
    },
    {
      date: "Sep 4 2023",
      title: "First potluck together with Vinh, Varada, and Aidan"
    },
    {
      date: "Sep 16 2023",
      title: "Being invited to Audrey's 22nd bday party while I was getting pizza"
    },
    {
      date: "Sep 24 2023",
      title: "First Kdrama night with the gym bros + Vinh, A Time Called you",
    },
    {
      date: "Oct 6 2023",
      title: "Getting all those Slander pics from you"
    },
    {
      date: "Oct 14 2023",
      title: "Michelle's birhtday party with our individual pics 😳"
    },
    {
      date: "Oct 26 2023",
      title: "Ice cream and studyinh in STAMP with you"
    },
    {
      date: "Oct 27-28 2023",
      title: "Sending selfies to one another while you were Halloween clubbing"
    },
    {
      date: "Oct 28 2023",
      title: "VSA Halloween. Us shoulder to shoulder on the couch and you grabbing my hand 😳"
    },
    {
      date: "Oct 29 2023",
      title: "Jeni messaging me about Isaiah telling her you were leading me on"
    },
    {
      date: "Oct 29 2023",
      title: "Making cookies w/ you and one of the first planned just us kdrama night"
    },
    {
      date: "Oct 31 2023",
      title: "Late night biking and me trying to find you at Looney's. Around the day I realized I liked you."
    },
    {
      date: "Nov 4 2023",
      title: "Ashley's 22nd bday party where I kept bringing you water"
    },
    {
      date: "Nov 7 2023",
      title: "Going to get ice cream with my littos..."
    },
    {
      date: "Nov 9 2023",
      title: "You reminding me about our Kdrama night, me coming at 11pm, and you lending me your rainjacket"
    },
    {
      date: "Nov 11 2023",
      title: "Our first KBBQ night. Sitting under blanket together during movie. Vinh tickling the crap out of me because he realized we might like each other"
    },
    {
      date: "Nov 12 2023",
      title: "The first time I admitted to someone else that I liked you while I was in Annapolis"
    },
    {
      date: "Nov 14, 2023",
      title: "Scheming with Iris about how I should figure out if you like me back"
    },
    {
      date: "Nov 14 2023",
      title: "Another kdrama night after dance practice at 10pm. The day my bike tire popped."
    },
    {
      date: "Nov 16 2023",
      title: "You feeling sick, hanging out in Iribe. Got you a marathon gyro, and another kdrama night. The one where our shoulder's touched 😒"
    },
    {
      date: "Nov 18 2023",
      title: "Making Vinh's cake, platonic Chipotle, and getting ready for his party together"
    },
    {
      date: "Nov 18 2023",
      title: "Vinh's 21st bday party, the fated day. The day we both got clowned to hell and back."
    },
    {
      date: "Nov 19 2023",
      title: "Me buying flowers for you, the second KBBQ night, karaoke, and me tweaking from stress"
    },
    {
      date: "Nov 20 2023",
      title: "Me telling everyone to stay behind after karaoke. A new chapter of our relationship and my life."
    },
    {
      date: "Nov 20 2023",
      title: "DC day with 3 third wheels. A new kind of kdrama night and our first cuddly time hehe."
    },
    {
      date: "Nov 22 2023",
      title: "My first 🫶 text to you."
    },
    {
      date: "Nov 24 2023",
      title: "Our first dating FaceTime call. Showing off the black friday hauls."
    },
    {
      date: "Nov 26 2023",
      title: "The day you told your cousins about me and them all stalking me. The first day I called you cute over text."
    },
    {
      date: "Dec 8 2023",
      title: "Day we went to Philly together. Our first date in holiday market and Kelly getting mad."
    },
    {
      date: "Dec 12 2023",
      title: "My first 💕 to you, which you promptly ignored. I remember being devastated that you didn't respond"
    },
    {
      date: "Dec 18 2023",
      title: "My first ❤️ to you, which was also not reciprocated. I remember panicking every time this happened."
    },
    {
      date: "Dec 20 2023",
      title: "Our one month and our date in Georgetown. There was no time for me to change before we left. Owala + Laufey ticks heheh."
    },
    {
      date: "Dec 26 2023",
      title: "The day the sticker wars began."
    },
    {
      date: "Dec 27 2023",
      title: "First day we played Stardew and the beginning of e^2 farm"
    },
  ]

  const events2024 = [
    {
      date: "Jan 5 2024",
      title: "Our date during winter break, seeing Planet Word in da cold",
    },
    {
      date: "Jan 9 2024",
      title: "First day we texted each other \"I love you\""
    },
    {
      date: "Jan 21 2024",
      title: "Back on campus from break. Our 2 months in Ellicott city and my first corn cheese."
    },
    {
      date: "Feb 2 2024",
      title: "First time at Looney's 🍻."
    },
    {
      date: "Feb 1x 2024",
      title: "Our first finished Kdrama, strong woman 🏋️‍♀️"
    },
    {
      date: "Feb 10 2024",
      title: "Buying you gifts for Valentine's and your bday. Nervously asking Ashley and Bri for gift approval."
    },
    {
      date: "Feb 14 2024",
      title: "Our first Valentine's @ Kyuramen. Walked over to your place to give you gifties. Got my photocards heheh."
    },
    {
      date: "Feb 17 2024",
      title: "Your bday and KBBQ in Virginia where Ryan sat in the trunk. Also Thai in Rockville. Also...😳"
    },
    {
      date: "Feb 24 2024",
      title: "Your bday party and my day in eyeliner pretending to be JK. Exposed photos in the album :')"
    },
    {
      date: "Mar 5 2024",
      title: "For some reason, a bunch of maul marks on my shoulder. I wonder how they got there..."
    },
    {
      date: "Mar 8 2024",
      title: "Kpop Club night in DC!"
    },
    {
      date: "Mar 20 2024",
      title: "Anandale date night at Tosokchon and Tous le Jours for bingsoo. Our 4th month together <3."
    },
    {
      date: "Mar 21 2024",
      title: "First NYC trip. Me as chauffeur and you as my hype girl."
    },
    {
      date: "Mar 24 2024",
      title: "Super cold cherry blossom picnic date in DC with onigiris and the dreaded hat of doom."
    },
    {
      date: "Mar 30 2024",
      title: "Our third family night together, and my first time meeting your parents and Mindy! Second time meeting your dad..."
    },
    {
      date: "Apr 7 2024",
      title: "Mini date in Dupont Circle looking for a nonexistent market. Got called cute by our Ramen waiter."
    },
    {
      date: "Apr 8 2024",
      title: "Seeing the solar eclipse together on McKeldin Lawn"
    },
    {
      date: "Apr 18 2024",
      title: "Getting absolutely clowned and destroyed for the suspenders and the clenched fist at Casino Night."
    },
    {
      date: "Apr 25 2024",
      title: "Laufey concert at Echo Stage. Gordon Ramsay fish n chips and cherry blossom taiyaki ice cream"
    },
    {
      date: "Apr 26 2024",
      title: "Jenina bday and doing trying to figure out SQL queries for Jeni"
    },
    {
      date: "May 4 2024",
      title: "Making beef enoki mushrooms and toppoki. More Queen of Tears."
    },
    {
      date: "May 5 2024",
      title: "Endless mimosas with Pooj and Pizza"
    },
    {
      date: "May 11 2024",
      title: "Buying sudafed and tissues for my sick baby"
    },
    {
      date: "May 17 2024",
      title: "Grabbing dinner in Rio with Alex and Momo. Candy salad day at Lake Artemesia and monikers"
    },
    {
      date: "May 18 2024",
      title: "My bday party where you met a bunch of my friends for the first time"
    },
    {
      date: "May 19 2024",
      title: "Dindin at Lao Szechuan with the bros + you"
    },
    {
      date: "May 20 2024",
      title: "Our 6 months in Eden where I tried Bánh xèo for the first time and the sugarcane passionfruit drink"
    },
    {
      date: "May 21 2024",
      title: "My baby graduates, me talking to your parents more, getting you and everyone flowers. Driving your car and running errands." + 
        " Grad party at night with hella taco bell"
    },
    {
      date: "May 22 2024",
      title: "Second endless mimosa brunch with the roomies + me. Scammed the diner whoops!"
    },
    {
      date: "May 25 2024",
      title: "Your house for your grad party! Meeting the extended fam, brunch in Rising Sun, Costco and Miniso Run as well. Lost passport whoopsie"
    },
    {
      date: "May 26 2024",
      title: "Grad photoshoot, lost bra, lost Uniqlo bag, and Gong Cha for all"
    },
    {
      date: "Jun 19 2024",
      title: "Coming back from J+K to visit me in NYC. Matchy cat shirts 🐱"
    },
    {
      date: "Jun 21 2024",
      title: "Watching Hamilton and my first ever Broadway show"
    },
    {
      date: "Jul 7 2024",
      title: "Back home for July 4, getting brunchy brunch, Ding Tea, Thai and going to Rio with my boo"
    },
    {
      date: "Jul 8 2024",
      title: "Overcooked and mario party at Bri's house with ESJ huddle room"
    },
    {
      date: "July 19 2024",
      title: "Back home for Bri's party, our lil aquarium date together <3"
    },
    {
      date: "July 21 2024",
      title: "Union market for lunchy lunch and mini golf and AYCE sushi for din din. Right before bus was missed :("
    }
  ]
</script>

<h2 class="text-3xl font-bold text-center">Our Timeline</h2>
<hr class="mb-4"/>
<Timeline events={events2023} />
<h2 class="text-4xl font-bold text-center">2024</h2>
<hr />
<Timeline events={events2024} />