//components - templates:
//Level 1: home, galerij, overmij, contact
//Level 2: onderwerp1, onderwerp 2, onderwerp 3, onderwerp 4
//Level 3: Detail.

//Level 1
const home = {
    props: ['showcase'],
    template: `
        <div id="showcase">
            <img id="showcase__img" v-bind:src= "showcase.href" alt="showcase artwork" />
            <div class="showcase__info">
                <h2> {{showcase.info.headerOne}} </h2>
                <p class="text text--showcase"> {{showcase.info.textOne}} </p>
                <br />
                <h2> {{showcase.info.headerTwo}} </h2>
                <p class="text text--showcase"> {{showcase.info.textTwo}} </p>
                <br />
                <h2> {{showcase.info.headerThree}} </h2>
                <p class="text text--showcase"> {{showcase.info.textThree}} </p>
                <br />
            </div>
        </div>
    `
}
const werk = {
    props: ['artworkOne', 'artworkTwo', 'artworkThree', 'artworkFour', 'artworkFive', 'artworkSix', 'artworkSeven', 'werkboekjeOne', 'werkboekjeTwo', 'werkboekjeThree', 'werkboekjeFour'],
    template: `
        <div id="werk">
            <h1 class="header">Werk</h1>
            <ul>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/werk/lijnen'>{{artworkOne.header}}</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/werk/rozet'>{{artworkTwo.header}}</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/werk/windroos'>{{artworkThree.header}}</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/werk/boomstam'>{{artworkFour.header}}</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/werk/hand'>{{artworkFive.header}}</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/werk/driehoekenvierkant'>{{artworkSix.header}}</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/werk/cirkel'>{{artworkSeven.header}}</router-link>
                </li>
            </ul>
            <h2 class="subheader">Werkboekjes</h2>
            <ul>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/werk/dekrachtvanimperfectie'>{{werkboekjeOne.header}}</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/werk/foutjes'>{{werkboekjeTwo.header}}</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/werk/sgraffitos'>{{werkboekjeThree.header}}</router-link>
                </li>
                <li class="werk__onderwerp">
                    <router-link class="werk__link" to= '/werk/droedelen'>{{werkboekjeFour.header}}</router-link>
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

            <div class="overmij__exposities">
                <p class="header__expositie"><i>Exposities</i></p>
                <p class="overmij__expositie" v-for="expositie in overmijText.exposities">{{expositie}} </p>
            </div>
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
const lijnen = {
    props: ['artworkOne'],
    template: `
        <div class="onderwerp">
            <h1 class="header">{{artworkOne.header}}</h1>
            <router-link class="onderwerp__terug" to='/werk'>Terug</router-link>

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
        <router-link class="onderwerp__terug" to='/werk'>Terug</router-link>

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
        <router-link class="onderwerp__terug" to='/werk'>Terug</router-link>

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
        <router-link class="onderwerp__terug" to='/werk'>Terug</router-link>

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
        <router-link class="onderwerp__terug" to='/werk'>Terug</router-link>

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
        <router-link class="onderwerp__terug" to='/werk'>Terug</router-link>

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
        <router-link class="onderwerp__terug" to='/werk'>Terug</router-link>

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
        <router-link class="onderwerp__terug" to='/werk'>Terug</router-link>

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
        <router-link class="onderwerp__terug" to='/werk'>Terug</router-link>

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
        <router-link class="onderwerp__terug" to='/werk'>Terug</router-link>

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
        <router-link class="onderwerp__terug" to='/werk'>Terug</router-link>

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
                <p class="text">{{allArtworkInfo[$route.params.image].text}}</p>
            </div>
        </div>
    </div>
    `
}