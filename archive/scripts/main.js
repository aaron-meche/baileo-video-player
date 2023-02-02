const mediaData = {
    Family_Guy: {
        mediaType: 'tv',
        cat: 'comedy',
        sTotal: 18,
        s1: ["Death Has a Shadow","I Never Met the Dead Man","Chitty Chitty Death Bang","Mind Over Murder","A Hero Sits Next Door","The Son Also Draws","Brian - Portrait of a Dog"],
        s2: ["Peter, Peter, Caviar Eater","Holy Crap","Da Boom","Brian in Love","Love Thy Trophy","Death Is a Bitch","The King Is Dead","I Am Peter, Hear Me Roar","If I'm Dyin', I'm Lyin","Running Mates","A Picture is Worth 1,000 Bucks","Fifteen Minutes of Shame","Road to Rhode Island","Let's Go to the Hop","Dammit Janet","There's Something About Paulie","He's Too Sexy for His Fat","E. Peterbus Unum","The Story on Page One","Wasted Talent","Fore, Father"],
        s3: ["The Thin White Line","Brian Does Hollywood","Mr. Griffin Goes to Washington","One If by Clam, Two If by Sea","And the Wiener Is...","Death Lives","Lethal Weapons","The Kiss Seen Around the World","Mr. Saturday Knight","A Fish Out of Water","Emission Impossible","To Love and Die in Dixie","Screwed the Pooch","Peter Griffin: Husband, Father... Brother?","Ready, Willing, and Disabled","A Very Special Family Guy Freakin' Christmas","Brian Wallows and Peter's Swallows","From Method to Madness","Stuck Together, Torn Apart","Road to Europe","Family Guy Viewer Mail #1","When You Wish Upon a Weinstein"],
        s4: ["North by North Quahog","Fast Times at Buddy Cianci Jr. High","Blind Ambition","Don't Make Me Over","The Cleveland-Loretta Quagmire","Petarded","Brian the Bachelor","8 Simple Rules for Buying My Teenage Daughter","Breaking Out Is Hard to Do","Model Misbehavior","Peter's Got Woods","Perfect Castaway","Jungle Love","PTV","Brian Goes Back to College","The Courtship of Stewie's Father","The Fat Guy Strangler","The Father, the Son, and the Holy Fonz","Brian Sings and Swings","Patriot Games","I Take Thee Quagmire","Sibling Rivalry","Deep Throats","Peterotica","You May Now Kiss the... Uh... Guy Who Receives","Petergeist","The Griffin Family History","Stewie B. Goode","Bang-o Was His Name-o","Stu and Stewie's Excellent Adventure"],
        s5: ["Stewie Loves Lois","Mother Tucker","Hell Comes to Quahog","Saving Private Brian","Whistle While Your Wife Works","Prick Up Your Ears","Chick Cancer","Barely Legal","Road to Rupert","Peter's Two Dads","The Tan Aquatic with Steve Zissou","Airport '07","Bill & Peter's Bogus Journey","No Meals on Wheels","Boys Do Cry","No Chris Left Behind","It Takes a Village Idiot, and I Married One","Meet the Quagmires"],
        s6: ["Blue Harvest","Movin' Out (Brian's Song)","Believe It or Not, Joe's Walking on Air","Stewie Kills Lois (Part 1)","Lois Kills Stewie (Part 2)","Padre de Familia","Peter's Daughter","McStroke","Back to the Woods","Play It Again, Brian","The Former Life of Brian","Long John Peter"],
        s7: ["Love, Blactually","I Dream of Jesus","Road to Germany","Baby Not on Board","The Man with Two Brians","Tales of a Third Grade Nothing","Ocean's Three and a Half","Family Gay","The Juice Is Loose","Fox-y Lady","Not All Dogs Go to Heaven","420","Stew-Roids","We Love You, Conrad","Three Kings","Peter's Progress"],
        s8: ["Road to the Multiverse","Family Goy","Spies Reminiscent of Us","Brian's Got a Brand New Bag","Hannah Banana","Quagmire's Baby","Jerome Is the New Black","Dog Gone","Business Guy","Big Man on Hippocampus","Dial Meg for Murder","Extra Large Medium","Go, Stewie, Go!","Peter-assment","Brian Griffin's House of Payne","April in Quahog","Brian & Stewie","Quagmire's Dad","The Splendid Source","Something, Something, Something, Dark Side","Partial Terms of Endearment"],
        s9: ["And Then There Were Fewer","Excellence in Broadcasting","Welcome Back, Carter","Halloween on Spooner Street","Baby, You Knock Me Out","Brian Writes a Bestseller","Road to the North Pole","New Kidney in Town","And I'm Joyce Kinney","Friends of Peter G.","German Guy","The Hand That Rocks the Wheelchair","Trading Places","Tiegs for Two","Brothers & Sisters","The Big Bang Theory","Foreign Affairs","It's a Trap!"],
        s10: ["Lottery Fever","Seahorse Seashell Party","Screams of Silence: The Story of Brenda Q","Stewie Goes for a Drive","Back to the Pilot","Thanksgiving","Amish Guy","Cool Hand Peter","Grumpy Old Man","Meg and Quagmire","The Blind Side","Livin' on a Prayer","Tom Tucker: The Man and His Dream","Be Careful What You Fish For","Burning Down the Bayit","Killer Queen","Forget-Me-Not","You Can't Do That on Television, Peter","Mr. and Mrs. Stewie","Leggo My Meg-O","Tea Peter","Family Guy Viewer Mail #2","Internal Affairs"],
        s11: ["Into Fat Air","Ratings Guy","The Old Man and the Big 'C'","Yug Ylimaf","Joe's Revenge","Lois Comes Out of Her Shell","Friends Without Benefits","Jesus, Mary and Joseph!","Space Cadet","Brian's Play","The Giggity Wife","Valentine's Day in Quahog","Chris Cross","Call Girl","Turban Cowboy","12 and a Half Angry Men","Bigfat","Total Recall","Save the Clam","Farmer Guy","Roads to Vegas","No Country Club for Old Men"],
        s12: ["Finders Keepers","Vestigal Peter","Quagmire's Quagmire","A Fistful of Meg","Boppa-dee Bappa-dee","Life of Brian","Into Harmony's Way","Christmas Guy","Peter Problems","Grimm Job","Brian's a Bad Father","Mom's the Word","3 Acts of God","Fresh Heir","Secondhand Spoke","Herpe the Love Sore","The Most Interesting Man in the World","Baby Got Black","Meg Stinks!","He's Bla-ack!","Chap Stewie"],
        s13: ["The Simpsons Guy","The Book of Joe","Baking Bad","Brian the Closer","Turkey Guys","The 2000-Year-Old Virgin","Stewie, Chris, & Brian's Excellent Adventure","Our Idiot Brian","This Little Piggy","Quagmire's Mom","Encyclopedia Griffin","Stewie Is Enceinte","Dr. C and the Women","#JOLO","Once Bitten","Roasted Guy","Fighting Irish","Take My Wife"],
        s14: ["Pilling Them Softly","Papa Has a Rollin' Son","Guy, Robot","Peternormal Activity","Peter, Chris, & Brian","Peter's Sister","Hot Pocket-Dial","Brokeback Swanson","A Shot in the Dark","Candy, Quahog Marshmallow","The Peanut Butter Kid","Scammed Yankees","An App a Day","Underage Peter","A Lot Going on Upstairs","The Heartbreak Dog","Take a Letter","The New Adventures of Old Tom","Run Chris, Run"],
        s15: ["The Boys in the Band","Bookie of the Year","American Gigg-olo","Inside Family Guy","Chris Has Got a Date, Date, Date, Date, Date","Hot Shots","High School English","Carter and Tricia","How the Griffin Stole Christmas","Passenger Fatty-Seven","Gronkowsbees","Peter's Def Jam","The Finer Strings","The Dating Game","Cop and a Half-wit","Saturated Fat Guy","Peter's Lost Youth","The Peter Principal","Dearly Deported","A House Full of Peters"],
        s16: ["Emmy-Winning Episode","Foxx in the Men House","Nanny Goats","Follow The Money","Three Doctors","The D in Apartment 23","Petey IV","Crimes and Meg’s Demeanor","Don’t Be a Dickens at Christmas","Boy (Dog) Meets Girl","Dog Bites Bear","Send In Stewie, Please","V Is For Mystery","Veteran Guy","The Woof of Wall Street","Family Guy Through the Years","Switch the Flip","HTTPete","The Unkindest Cut","Are You There God? It’s Me, Peter"],
        s17: ["Married... with Cancer","Dead Dog Walking","Pal Stewie","Big Trouble in Little Quahog","Regarding Carter","Stand by Meg","The Griffin Winter Games","Con Heiress","Pawtucket Pete","Hefty Shades of Gray","Trump Guy","Bri, Robot","Trans-Fat","Family Guy Lite","No Giggity, No Doubt","You Can't Handle the Booth!","Island Adventure","Throw It Away","Girl, Internetted","Adam West High"],
        s18: ['Yacht Rocky','Bri-da','Absolutely Babulous','Disney the Reboot','Cat Fight',"Peter and Lois' Wedding",'Heart Burn','Shanksgiving','Christmas is Coming','Connies Celica','Short Cuts','Undergrounded','Rich Old Stewie','The Movement','Baby Stewie','Start Me Up','Coma Guy','Better Off Meg','Holly Bibble',"Movin in Principal Shepherd's Song"],
        color: "rgba(227, 45, 255, 1)",
        recently_added: 'true',
    },

    Parks_and_Recreation: {
        mediaType: 'tv',
        cat: 'comedy',
        sTotal: 7,
        s1: ["Pilot", "Canvassing", "The Reporter", "Boys' Club", "The Banquet", "Rock Show"],
        s2: ["Pawnee Zoo", "The Stakeout", "Beauty Pageant", "Practice Date", "Sister City", "Kaboom", "Greg Pitkins", "Ron and Tammy", "The Camel", "Hunting Trip", "Tom’s Divorce", "Christmas Scandal", "The Set Up", "Leslie’s House", "Sweetums", "Galentine’s Day", "Woman of the Year", "The Possum", "Park Safety", "Summer Catalog", "94 Meetings", "Telethon", "The Master Plan", "Freddy Spaghetti"],
        s3: ["Go Big or Go Home", "Flu Season", "Time Capsule", "Ron and Tammy Part Two", "Media Blitz", "Indianapolis", "Harvest Festival", "Camping", "Andy and April’s Fancy Party", "Soulmates", "Jerry’s Painting", "Eagleton", "The Fight", "Road Trip", "The Bubble", "Li’l Sebastian"],
        s4: ["I'm Leslie Knope", "Ron and Tammys", "Born and Raised", "Pawnee Rangers", "Meet n Greet", "End of the World", "The Treaty", "Smallest Park", "The Trial of Leslie Know", "Citizen Knope", "The Comeback Kid", "Campaign Ad", "Bowling for Votes", "Operation Ann", "Dave Returns", "Sweet Sixteen", "Campaign Shake-Up", "Lucky", "Live Ammo", "The Debate", "Bus Tour", "Win, Lose, or Draw"],
        s5: ["Ms. Knope Goes to Washington", "Soda Tax", "How a Bill Becomes a Law", "Sex Education", "Halloween Suprise", "Ben's Parents", "Leslie v April", "Pawnee Commons", "Ron and Diane", "Two Parties", "Women in Garbage", "Ann’s Decision", "Emergency Response", "Leslie and Ben", "Correspondent’s Lunch", "Bailout", "Partridge", "Animal Control", "Article Two", "Jerry’s Retirement", "Swing Vote", "Are You Better Off"],
        s6: ["London", "The Pawnee-Eagleton Tip Off Classic", "Doppelgängers", "Gin it Up!", "Filibuster", "Recall Vote", "Fluoride", "The Cones of Dunshire", "Second Chunce", "New Beginnings", "Farmers Market", "Ann and Chris", "Anniversaries", "The Wall", "New Slogan", "Galentine’s Day", "Prom", "Flu Season 2", "One in 8,000", "Moving Up"],
        s7: ["2017", "Ron and Jammy", "William Henry Harrison", "Leslie and Ron", "Gryzzlbox", "Save JJ's", "Donna and Joe", "Ms. Ludgate-Dwyer Goes to Washington", "Pie-Mary", "The Johnny Karate Super Awesome Musical Explosion Show", "Two Funerals", "One Last Ride"],
        color: 'rgba(188, 230, 149, 1)',
        recently_added: 'true',
    },

    Squid_Game: {
        mediaType: 'tv',
        cat: 'drama',
        sTotal: 1,
        s1: ['Red Light', "Green Light", "Hell", "The Man with the Umbrella", "Stick to the Team", "A Fair World", "Gganbu", "VIPS", "Front Man", "One Lucky Day"],
        color: 'rgba(164, 79, 255, 1)',
        recently_added: 'true',
    },

    Sherlock: {
        mediaType: 'tv',
        cat: 'drama',
        sTotal: 4,
        s1: ["A Study in Pink", "The Blind Banker", "The Great Game"],
        s2: ["A Scandal in Belgravia", "The Hounds of Baskerville", "The Reichenbach Fall"],
        s3: ["The Empty Hearse", "The Sign of Three", "His Last Vow"],
        s4: ["The Six Thatchers", "The Lying Detective", "The Final Problem"],
        color: "rgba(255, 49, 49, 1)",
    },

    The_Office: {
        mediaType: 'tv',
        cat: 'comedy',
        sTotal: 9,
        s1: ["Pilot", "Diversity Day", "Health Care", "The Alliance", "Basketball", "Hot Girl"],
        s2: ["The Dundies", "Sexual Harassment", "Office Olympics", "The Fire", "Halloween", "The Fight", "The Client", "Performance Review", "Email Surveillance", "Christmas Party", "Booze Cruise", "The Injury", "The Secret", "The Carpet", "Boys and Girls", "Valentine's Day", "Dwight's Speech", 'Take Your Daughter to Work Day', "Micheal's Birthday", "Drug Testing", "Conflict Resolution", "Casino Night"],
        s3: ["Gay Witch Hunt", "The Convention", "The Coup", "Grief Counseling", "Initiation", "Diwali", "Branch Closing", "The Merger", "The Convict", "A Benihana Christmas", "Back From Vacation", "Traveling Salesman", "The Return", "Ben Franklin", "Phyllis' Wedding", "Business School", "Cocktails", "The Negotiation", "Safety Training", "Product Recall", "Women's Appreciation", "Beach Games", "The Job"],
        s4: ["Fun Run", "Dunder Mifflin Infinity", "Launch Party", "Money", "Local Ad", "Branch Wars", "Survivor Man", "The Deposition", "Dinner Party", "Chair Model", "Night Out", "Did I Stutter", "Job Fair", "Goodbye, Toby"],
        s5: ["Weight Loss", "Business Ethics", "Baby Shower", "Crime AID", "Employee Transfer", "Customer Survey", "Business Trip", "Frame Toby", "The Surplus", "Moroccan Christmas", "The Duel", "Prince Family Paper", "Stress Relief", "Lecture Circuit P1", "Lecture Circuit P2", "Blood Drive", "Golden Ticket", "New Boss", "Two Weeks", "Dream Team", "Michael Scott Paper Company", "Heavy Competition", "Broke", "Casual Friday", "Cafe Disco", "Company Picnic"],
        s6: ["Gossip", "The Meeting", "The Promotion", "Niagra", "Mafia", "The Lover", "Koi Pond", "Double Date", "Murder", "Shareholder Meeting", "Scott's Tots", "Secret Santa", "The Banker", "Sabre", "The Manager and the Salesman", "The Delivery", "St. Patrick's Day", "New Leads", "Happy Hour", "Secretary's Day", "Body Language", "The Cover Up", "The Chump", "Whistleblower"],
        s7: ["Nepotism", "Counseling", "Andy's Play", "Sex Ed", "The Sting", "Costume Contest", "Christening", "Viewing Party", "WUPHF.com", "China", "Classy Christmas", "Ultimatum", "The Seminar", "The Search", "PDA", "Threat Level Midnight", "Todd Packer", "Garage Sale", "Training Day", "Michael's Last Dundies", "Goodbye, Michael", "The Inner Circle", "Dwight K. Schrute, (Acting) Manager", "Search Committee"],
        s8: ["The List", "The Incentive", "Lotto", "Garden Party", "Spooked", "Doomsday", "Pam's Replacement", "Gettysburg", "Mrs. California", "Christmas Wishes", "Trivia", "Pool Party", "Jury Duty", "Special Project", "Tallahassee", "After Hours", "Test the Store", "Last Day in Florida", "Get the Girl", "Welcome Party", "Angry Andy", "Fundraiser", "Turf War", "Free Family Portrait Studio"],
        s9: ["New Guys", "Roy's Wedding", "Andy's Ancestry", "Work Bus", "Here Comes Treble", "The Boat", "The Whale", "The Target", "Dwight Christmas", "Lice", "Suit Warehouse", "Customer Loyalty", "Junior Salesman", "Vandalism", "Couples Discount", "Moving On", "The Farm", "Promos", "Stairmageddon", "Paper Airplane", "Livin' The Dream", "AARM", "Finale"],
        color: 'rgba(0, 51, 255)',
    },

    Wanda_Vision: {
        mediaType: 'tv',
        cat: 'marvel',
        sTotal: 1,
        s1: ["Filmed Before a Live Studio Audience","Don't Touch That Dial","Now In Color","We Interrupt This Program","On a Very Special Episode...","All-New Holloween Spectacular","Breaking the Fourth Wall","Previously On","The Series Finale"],
        color: 'rgba(0, 51, 255)',
    },

    Avengers_ENDGAME: {
        mediaType: 'movie',
        cat: 'marvel',
    },

    American_Psycho: {
        mediaType: 'movie',
        cat: 'drama',
    },

    Cars_2: {
        mediaType: 'movie',
        cat: 'animation',
    },

    Cars_3: {
        mediaType: 'movie',
        cat: 'animation',
    },

    Clueless: {
        mediaType: 'movie',
        cat: 'comedy',
    },

    Coraline: {
        mediaType: 'movie',
        cat: 'animation',
        recently_added: 'true',
    },

    Daddys_Home_2: {
        mediaType: 'movie',
        cat: 'christmas',
    },

    Despicable_Me: {
        mediaType: 'movie',
        cat: 'animation',
    },

    Despicable_Me_2: {
        mediaType: 'movie',
        cat: 'animation',
    },

    Despicable_Me_3: {
        mediaType: 'movie',
        cat: 'animation',
    },

    Dumb_and_Dumber: {
        mediaType: 'movie',
        cat: 'comedy',
    },

    Dumb_and_Dumber_To: {
        mediaType: 'movie',
        cat: 'comedy',
    },

    Elf: {
        mediaType: 'movie',
        cat: 'christmas',
    },

    Hidden_Figures: {
        mediaType: 'movie',
        cat: 'drama',
    },

    Knives_Out: {
        mediaType: 'movie',
        cat: 'drama',
    },

    Legally_Blonde: {
        mediaType: 'movie',
        cat: 'comedy',
    },

    Mean_Girls: {
        mediaType: 'movie',
        cat: 'comedy',
    },

    Mean_Girls_2: {
        mediaType: 'movie',
        cat: 'comedy',
    },

    Minions_The_Rise_of_Gru: {
        mediaType: 'movie',
        cat: 'animation',
        recently_added: 'true',
    },

    Minions: {
        mediaType: 'movie',
        cat: 'animation',
    },

    Miss_Congeniality: {
        mediaType: 'movie',
        cat: 'comedy',
    },

    Ratatouille: {
        mediaType: 'movie',
        cat: 'animation',
    },

    Spider_Man_Far_From_Home: {
        mediaType: 'movie',
        cat: 'marvel',
    },

    Spider_Man_Homecoming: {
        mediaType: 'movie',
        cat: 'marvel',
    },

    Spider_Man_No_Way_Home: {
        mediaType: 'movie',
        cat: 'marvel',
    },

    The_Amazing_Spider_Man_2: {
        mediaType: 'movie',
        cat: 'marvel',
    },

    The_Incredible_Hulk: {
        mediaType: 'movie',
        cat: 'marvel',
    },

    The_Notebook: {
        mediaType: 'movie',
        cat: 'drama',
    },

    The_Proposal: {
        mediaType: 'movie',
        cat: 'romcom',
    },

    The_Waterboy: {
        mediaType: 'movie',
        cat: 'comedy',
    },

    Vacation: {
        mediaType: 'movie',
        cat: 'comedy',
        recently_added: 'true',
    },
}


// Reference functions

// Shuffles array order
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

// Dom querySelector quick function
function dom(query) {
    return document.querySelector(query)
}

// Dom querySelectorAll quick function
function dom_a(query) {
    return document.querySelectorAll(query)
}


// Entry function
function main() {
    // Order of media display lists
    buildMediaDisplaySection('mediaType', 'tv', 'TV Series')
    buildMediaDisplaySection('mediaType', 'movie', 'Movies')
    buildMediaDisplaySection('cat', 'comedy', 'Laughtastics')
    buildMediaDisplaySection('cat', 'animation', 'Animated Classics')
    buildMediaDisplaySection('cat', 'drama', 'Theatrical Dramatics')
    buildMediaDisplaySection('cat', 'marvel', 'Marvel Creations')
    buildMediaDisplaySection('cat', 'romcom', 'Romantic Comedies')
    buildMediaDisplaySection('cat', 'christmas', 'Christmas Seasonals')

    // Loading function
    let interval = setInterval(function() {
        if (document.readyState === 'complete') {
            clearInterval(interval)
            dom('#loading').style.display = 'none'
        }    
    }, 100);
}


// Build templates
const template = {
    media_display_section: function(section, title) {
        return `
        <div id='mediaDisplay_section_` + section.replaceAll(' ', '-') + `' class="x-scroll-section">

            <div class="title">` + title + `</div>

            <div id='mediaDisplay_collection_` + section.replaceAll(' ', '-') + `' class="x-scroll">
            </div>

        </div>
        `
    },
    media_item: function(mediaTitle, moreInformation) {
        let click_behavior = `watch.movie("${mediaTitle.replaceAll(' ', '_')}")`
        if (mediaData[mediaTitle.replaceAll(' ', '_')]['mediaType'] == 'tv') click_behavior = `tvPanel.expand("${mediaTitle.replaceAll(' ', '_')}")`

        return `
        <div class="media-item" onclick='${click_behavior}'>

            <img src="images/thumbnails/${mediaTitle}.png">

            <div class="data">
                <div class="title">${mediaTitle}</div>
                <div class="information">${moreInformation}</div>
            </div>

        </div>
        `
    },
    season_selector_item: function(title, number) {
        return `
        <div class="item" onclick='tvPanel.season("${title}", ${number})'>
            Season ${number}
        </div>
        `
    },
    episode_selector_item: function(tvShowTitle, seasonNumber, episodeNumber) {
        return `
        <div class="item" onclick='watch.tv("${tvShowTitle}",${seasonNumber}, ${episodeNumber})'>

            <div class="left">${mediaData[tvShowTitle]['s' + seasonNumber][episodeNumber]}</div>
            <div class="right">Episode ${episodeNumber}</div>

        </div>
        `
    }
}


// Builds horizontally scrolling media sections
function buildMediaDisplaySection(conditionalKey, conditionalVal, title) {
    document.querySelector('#mediaDisplayImport').innerHTML += template.media_display_section(conditionalVal, title)
    let shuffledMediaList = shuffle(Object.keys(mediaData))

    for (let i = 0; i < shuffledMediaList.length; i++) {
        let mediaTitle = shuffledMediaList[i].replaceAll('_', ' ')
        if (mediaData[shuffledMediaList[i]][conditionalKey] == conditionalVal) {
            let caption = ''
            let category = mediaData[shuffledMediaList[i]]['cat']
            category = category.charAt(0).toUpperCase() + category.slice(1);

            if (mediaData[shuffledMediaList[i]]['mediaType'] == 'tv') {
                let pluralSeasons = ''
                if (mediaData[shuffledMediaList[i]]['sTotal'] > 1) pluralSeasons = 's'
                caption += `TV Series | ${mediaData[shuffledMediaList[i]]['sTotal']} Season${pluralSeasons} <br> ${category}`
            }
            else if (mediaData[shuffledMediaList[i]]['mediaType'] == 'movie') {
                caption = `Movie <br> ${category}`
            }

            document.querySelector(`#mediaDisplay_collection_${conditionalVal}`).innerHTML += template.media_item(mediaTitle, caption)
        }
    }
}


// TV Expand Panel
const tvPanel = {
    expand: function(title) {
        dom('#tvPanel').style.top = '0'
        dom('#tvPanel').style.opacity = '1'
        dom('#tvPanel .main-title').innerHTML = title.replaceAll('_', ' ')
        dom('#tvPanel .display-image').style.backgroundImage = 'url("images/display images/' + title.replaceAll('_', ' ') + '.png")'

        dom('#tvPanel .season-selector').innerHTML = '';
        for (let i = 0; i < mediaData[title]['sTotal']; i++) {
            dom('#tvPanel .season-selector').innerHTML += template.season_selector_item(title, i + 1)
        }
        this.season(title, 1)
    },
    season: function(tvShowTitle, seasonNumber) {
        for (let i = 0; i < dom('#tvPanel .season-selector').children.length; i++) {
            dom('#tvPanel .season-selector').children[i].classList.remove('active')
        }
        dom('#tvPanel .season-selector').children[seasonNumber - 1].classList.add('active')

        dom('#tvPanel .episode-selector').innerHTML = ''
        for (let i = 0; i < mediaData[tvShowTitle]['s' + seasonNumber].length; i++) {
            dom('#tvPanel .episode-selector').innerHTML += template.episode_selector_item(tvShowTitle, seasonNumber, i + 1)
        }
    },
    retract: function(title) {
        dom('#tvPanel').style.top = '100vh'
        dom('#tvPanel').style.opacity = '0'
    },
}


// Watch Functions
const watch = {
    tv: function(tvShowTitle, seasonNum, episodeNum) {

    },
    movie: function(movieTitle) {
        alert(movieTitle)
    }
}