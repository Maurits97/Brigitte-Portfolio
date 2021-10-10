//components - templates:
//Level 1: home, galerij, overmij, contact
//Level 2: onderwerp1, onderwerp 2, onderwerp 3, onderwerp 4
//Level 3: Detail.

//Level 1
const home = {
    props: ['showcase'],
    template: `
        <div id="showcase">
            <router-link to="/mijnwerk/cirkel/2020054"><img id="showcase__img" v-bind:src="showcase.href" alt="showcase artwork" /></router-link>
            <p class="showcase__klik">Klik op de foto voor meer informatie.</p>
            <div class="text">
                <h2 class="subheader">Actueel</h2>
                <div class="text">
                    <p>Kunstlijn Haarlem, groepsexpositie leden studio37</p>
                    <p>5 - 7 november 2021, Groot Heiligland 37</p>
                    <p>Meer info: <router-link class="actueel-link" to="/exposities">klik hier</router-link></p>
                </div>
            </div>
        </div>
    `
}
const exposities = {
    props: ['expositiesText'],
    template: `
        <div id="expositites" class="detail">
            <h1 class="header">{{ expositiesText.header }}</h1>

            <h3 class="subheader">2021</h3>

            <div class="detail--flex detail--flex-expo">
                <div class="detail__artwork--expo" v-bind:style="{ backgroundImage: 'url(' + 'img/' + 'exposities' + '/' + 'poster_open_studio37_2021' + '.png' + ')' }"></div>

                <div class="detail__aside">
                    <p class="detail__aside--header">{{ expositiesText.one.title }}</p>
                    <br />
                    <p class="detail__aside--text">{{ expositiesText.one.date }}</p>
                </div>
            </div>

            <h3 class="subheader">2019</h3>

            <div class="detail--flex detail--flex-expo">
                <div class="detail__aside">
                    <p class="detail__aside--header">{{ expositiesText.two.title }}</p>
                    <br />
                    <p class="detail__aside--text">{{ expositiesText.two.date }}</p>
                </div>
            </div>

            <h3 class="subheader">2018</h3>

            <div class="detail--flex detail--flex-expo">
                <div class="detail__aside">
                    <p class="detail__aside--header">{{ expositiesText.three.title }}</p>
                    <br />
                    <p class="detail__aside--text">{{ expositiesText.three.date }}</p>
                </div>
            </div>

        </div>
    `
}
const werk = {
    props: ['artworkzero', 'artworkOne', 'artworkTwo', 'artworkThree', 'artworkFour', 'artworkFive', 'artworkSix', 'artworkSeven', 'werkboekjeOne', 'werkboekjeTwo', 'werkboekjeThree', 'werkboekjeFour'],
    template: `
        <div id="werk">
            <h1 class="header">Mijn werk</h1>
            <ul>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/mijnwerk/ramen'>{{artworkZero.header}} - nieuw!</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/mijnwerk/lijnen'>{{artworkOne.header}}</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/mijnwerk/rozet'>{{artworkTwo.header}}</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/mijnwerk/windroos'>{{artworkThree.header}}</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/mijnwerk/boomstam'>{{artworkFour.header}}</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/mijnwerk/hand'>{{artworkFive.header}}</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/mijnwerk/cirkel'>{{artworkSeven.header}}</router-link>
                </li>
            </ul>
            <h2 class="subheader">Werkboekjes</h2>
            <ul>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/mijnwerk/dekrachtvanimperfectie'>{{werkboekjeOne.header}}</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/mijnwerk/foutjes'>{{werkboekjeTwo.header}}</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/mijnwerk/sgraffitos'>{{werkboekjeThree.header}}</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/mijnwerk/droedelen'>{{werkboekjeFour.header}}</router-link>
                </li>
            </ul>


        </div>
    `
}
const overmij = {
    props: ['overmijText'],
    template: `
        <div class="overmij">
            <h1 class="header">{{overmijText.header}}</h1>
            <p class="text">{{overmijText.text}}</p>
            <p class="text">{{overmijText.text2}}</p>
            <p class="text">{{overmijText.text3}}</p>
            <h2 class="subheader">{{overmijText.cv.titel}}</h2>
            <p class="text">{{overmijText.cv.text}}</p>
        </div>
    `

}
const contact = {
    props: ['contactText'],
    template: `
        <div class="contact">
            <h1 class="header">{{contactText.header}}</h1>
            <p class="text contact__name">{{contactText.naam}}</p>
            <h2 class="contact__header">Atelier:</h2>
            <p>Dompvloedslaan 5-B</p>
            <p>2051 NA Overveen</p>
            <br />
            <p>www.brigittestark.nl</p>
            <p>06-10871840</p>
            <br />
            <h2 class="contact__header">E-mail:</h2>
            <p>brouwerstark@gmail.com</p>
        </div>
    `
}

//Level 2
const ramen = {
    props: ['artworkZero'],
    template: `
        <div class="onderwerp">
            <h1 class="header">{{artworkZero.header}}</h1>
            <router-link class="onderwerp__terug" to='/mijnwerk'>Terug</router-link>

            <p class="text"> {{ artworkZero.text }}</p>

            <div class="onderwerp__flex">
                <div class="onderwerp__artwork" v-for="artwork in artworkZero.links" v-bind:style="{ backgroundImage: 'url(' + artwork.work + ')' }">

                <router-link class="onderwerp__artwork__pagelink" :to='artwork.pagelink'></router-link>
                
                </div>
            </div>
        </div>
    `
}

const lijnen = {
    props: ['artworkOne'],
    template: `
        <div class="onderwerp">
            <h1 class="header">{{artworkOne.header}}</h1>
            <router-link class="onderwerp__terug" to='/mijnwerk'>Terug</router-link>

            <p class="text"> {{ artworkOne.text }}</p>

            <div class="onderwerp__flex">
                <div class="onderwerp__artwork" v-for="artwork in artworkOne.links" v-bind:style="{ backgroundImage: 'url(' + artwork.work + ')' }">

                <router-link class="onderwerp__artwork__pagelink" :to='artwork.pagelink'></router-link>
                
                </div>
            </div>
        </div>
    `
}

const rozet = {
    props: ['artworkTwo'],
    template: `
    <div class="onderwerp">
        <h1 class="header">{{artworkTwo.header}}</h1>
        <router-link class="onderwerp__terug" to='/mijnwerk'>Terug</router-link>

        <p class="text"> {{ artworkTwo.textOne }}</p>
        <p class="text"> {{ artworkTwo.textTwo }}</p>

        <div class="onderwerp__flex">
            <div class="onderwerp__artwork" v-for="href in artworkTwo.links" v-bind:style="{ backgroundImage: 'url(' + href.work + ')' }">
                <router-link class="onderwerp__artwork__pagelink" :to=href.pagelink></router-link>
            </div>
        </div>
    </div>
`
}
const windroos = {
    props: ['artworkThree'],
    template: `
    <div class="onderwerp">
        <h1 class="header">{{artworkThree.header}}</h1>
        <router-link class="onderwerp__terug" to='/mijnwerk'>Terug</router-link>

        <p class="text"> {{ artworkThree.text }}</p>

        <div class="onderwerp__flex">
            <div class="onderwerp__artwork" v-for="href in artworkThree.links" v-bind:style="{ backgroundImage: 'url(' + href.work + ')' }">
                <router-link class="onderwerp__artwork__pagelink" :to=href.pagelink></router-link>
            </div>
        </div>
    </div>
`
}
const boomstam = {
    props: ['artworkFour'],
    template: `
    <div class="onderwerp">
        <h1 class="header">{{artworkFour.header}}</h1>
        <router-link class="onderwerp__terug" to='/mijnwerk'>Terug</router-link>

        <p class="text"> {{ artworkFour.text }}</p>

        <div class="onderwerp__flex">
            <div class="onderwerp__artwork" v-for="href in artworkFour.links" v-bind:style="{ backgroundImage: 'url(' + href.work + ')' }">
                <router-link class="onderwerp__artwork__pagelink" :to=href.pagelink></router-link>
            </div>
        </div>
    </div>
`
}

const hand = {
    props: ['artworkFive'],
    template: `
    <div class="onderwerp">
        <h1 class="header">{{artworkFive.header}}</h1>
        <router-link class="onderwerp__terug" to='/mijnwerk'>Terug</router-link>

        <p class="text"> {{ artworkFive.text }}</p>

        <div class="onderwerp__flex">
            <div class="onderwerp__artwork" v-for="href in artworkFive.links" v-bind:style="{ backgroundImage: 'url(' + href.work + ')' }">
                <router-link class="onderwerp__artwork__pagelink" :to=href.pagelink></router-link>
            </div>
        </div>
    </div>
`
}
const driehoekenvierkant = {
    props: ['artworkSix'],
    template: `
    <div class="onderwerp">
        <h1 class="header">{{artworkSix.header}}</h1>
        <router-link class="onderwerp__terug" to='/mijnwerk'>Terug</router-link>

        <p class="text"> {{ artworkSix.text }}</p>

        <div class="onderwerp__flex">
            <div class="onderwerp__artwork" v-for="href in artworkSix.links" v-bind:style="{ backgroundImage: 'url(' + href.work + ')' }">
                <router-link class="onderwerp__artwork__pagelink" :to=href.pagelink></router-link>
            </div>
        </div>
    </div>
`
}

const cirkel = {
    props: ['artworkSeven'],
    template: `
    <div class="onderwerp">
        <h1 class="header">{{artworkSeven.header}}</h1>
        <router-link class="onderwerp__terug" to='/mijnwerk'>Terug</router-link>

        <p class="text"> {{ artworkSeven.text }}</p>

        <div class="onderwerp__flex">
            <div class="onderwerp__artwork" v-for="href in artworkSeven.links" v-bind:style="{ backgroundImage: 'url(' + href.work + ')' }">
                <router-link class="onderwerp__artwork__pagelink" :to=href.pagelink></router-link>
            </div>
        </div>
    </div>
`
}

const dekrachtvanimperfectie = {
    props: ['werkboekjeOne'],
    template: `
    <div class="onderwerp">
        <h1 class="header">{{werkboekjeOne.header}}</h1>
        <router-link class="onderwerp__terug" to='/mijnwerk'>Terug</router-link>

        <p class="text"> {{ werkboekjeOne.text }}</p>

        <div class="onderwerp__flex">
            <div class="onderwerp__artwork" v-for="href in werkboekjeOne.links" v-bind:style="{ backgroundImage: 'url(' + href.work + ')' }">
                <router-link class="onderwerp__artwork__pagelink" :to=href.pagelink></router-link>
            </div>
        </div>
    </div>
`
}

const foutjes = {
    props: ['werkboekjeTwo'],
    template: `
    <div class="onderwerp">
        <h1 class="header">{{werkboekjeTwo.header}}</h1>
        <router-link class="onderwerp__terug" to='/mijnwerk'>Terug</router-link>

        <p class="text"> {{ werkboekjeTwo.text }}</p>

        <div class="onderwerp__flex">
            <div class="onderwerp__artwork" v-for="href in werkboekjeTwo.links" v-bind:style="{ backgroundImage: 'url(' + href.work + ')' }">
                <router-link class="onderwerp__artwork__pagelink" :to=href.pagelink></router-link>
            </div>
        </div>
    </div>
`
}

const sgraffitos = {
    props: ['werkboekjeThree'],
    template: `
    <div class="onderwerp">
        <h1 class="header">{{werkboekjeThree.header}}</h1>
        <router-link class="onderwerp__terug" to='/mijnwerk'>Terug</router-link>

        <p class="text"> {{ werkboekjeThree.text }}</p>

        <div class="onderwerp__flex">
            <div class="onderwerp__artwork" v-for="href in werkboekjeThree.links" v-bind:style="{ backgroundImage: 'url(' + href.work + ')' }">
                <router-link class="onderwerp__artwork__pagelink" :to=href.pagelink></router-link>
            </div>
        </div>
    </div>
`
}

const droedelen = {
    props: ['werkboekjeFour'],
    template: `
    <div class="onderwerp">
        <h1 class="header">{{werkboekjeFour.header}}</h1>
        <router-link class="onderwerp__terug" to='/mijnwerk'>Terug</router-link>

        <p class="text"> {{ werkboekjeFour.text }}</p>

        <div class="onderwerp__flex">
            <div class="onderwerp__artwork" v-for="href in werkboekjeFour.links" v-bind:style="{ backgroundImage: 'url(' + href.work + ')' }">
                <router-link class="onderwerp__artwork__pagelink" :to=href.pagelink></router-link>
            </div>
        </div>
    </div>
`
}


const detail = {
    props: ['allArtworkInfo'],
    template: `
    <div class="detail">
        <router-link class="detail__terug" :to='{name: $route.params.work}' >Terug</router-link>

        <div class="detail--flex">
            <div class="detail__artwork" v-bind:style="{ backgroundImage: 'url(' + 'img/' + $route.params.work + '/' + $route.params.image + '.jpg' + ')' }"></div>

            <div class="detail__aside">
                <p class="detail__aside--header">{{allArtworkInfo[$route.params.image].titel}}</p>
                <p class="detail__aside--header">{{allArtworkInfo[$route.params.image].jaartal}}</p>
                <p class="detail__aside--header">{{allArtworkInfo[$route.params.image].techniek}}</p>
                <p class="detail__aside--header">{{allArtworkInfo[$route.params.image].dimensie}}</p>
                <br />
                <div class="detail__aside-container" v-for="textElement in allArtworkInfo[$route.params.image].text">
                    <div v-for="text in textElement">
                        <p class="detail__aside--text detail__aside--textExtra">{{ text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}