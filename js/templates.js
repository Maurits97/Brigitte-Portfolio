//templates:
//Level 1: home, galerij, overmij, contact
//Level 2: onderwerp1, onderwerp 2, onderwerp 3, onderwerp 4
//Level 3: Detail.

//Level 1
const home = {
    props: ['showcase'],
    template: `
        <div id="showcase">
            <p> {{showcase.href}}</p>
            <img id="showcase__img" href=""/>
        </div>
    `
}
const galerij = {
    template: `
        <div id="galerij">
            <h1 class="header">Werk</h1>
            <ul>
                <li class="galerij__onderwerp">
                    <router-link class="galerij__link" to= '/galerij/subonderwerp1'>Ambachten</router-link>
                </li>
                <li class="galerij__onderwerp">
                    <router-link class="galerij__link" to= '/galerij/subonderwerp2'>Onderwerp 2</router-link>
                </li>
                <li class="galerij__onderwerp">
                    <router-link class="galerij__link" to= '/galerij/subonderwerp3'>Onderwerp 3</router-link>
                </li>
                <li class="galerij__onderwerp">
                    <router-link class="galerij__link" to= '/galerij/subonderwerp4'>Onderwerp 4</router-link>
                </li>
                <li class="galerij__onderwerp">
                    <router-link class="galerij__link" to= '/galerij/subonderwerp5'>Onderwerp 5</router-link>
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
        </div>
    `

}
const contact = {
    props: ['contactText'],
    template: `
        <div class="contact">
            <h1 class="header">{{contactText.header}}</h1>
            <p class="text">{{contactText.text}}</p>
        </div>
    `
}

//Level 2
const subonderwerp1 = {
    props: ['artworkOnderwerp1'],
    template: `
        <div class="onderwerp">
            <h1 class="header">{{artworkOnderwerp1.header}}</h1>
            <router-link class="onderwerp__terug" to='/galerij'>Terug</router-link>

            <p class="text"> {{ artworkOnderwerp1.text }}</p>

            <div class="onderwerp__flex">
                <div class="onderwerp__artwork" v-for="href in artworkOnderwerp1.links">{{href}}</div>
            </div>
            
        </div>
    `
}

const subonderwerp2 = {
    template: `
    <div class="onderwerp">
        <h1 class="header">2</h1>
        <router-link class="onderwerp__terug" to='/galerij'>Terug</router-link>
    </div>

`
}
const subonderwerp3 = {
    template: `
    <div class="onderwerp">
        <h1 class="header">3</h1>
        <router-link class="onderwerp__terug" to='/galerij'>Terug</router-link>
    </div>

`
}
const subonderwerp4 = {
    template: `
    <div class="onderwerp">
        <h1 class="header">4</h1>
        <router-link class="onderwerp__terug" to='/galerij'>Terug</router-link>
    </div>

`
}
const subonderwerp5 = {
    template: `
    <div class="onderwerp">
        <h1 class="header">5</h1>
        <router-link class="onderwerp__terug" to='/galerij'>Terug</router-link>
    </div>

`
}