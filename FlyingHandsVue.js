

Vue.component('topnavbar',{
    template: `
    <div>
        <div class="topnav">
            <a href="indexFH.html">Home</a>
            <a href="booking.html">Bookings</a>
            <a href="contact.html">Contact Us</a>
            <a href="about.html">About Us</a>
        </div>
    </div>
    `
})


var app = new Vue({
    el:'#app',
    data:{
        boximg: false,
        kickimg: false,
        muayimg: false,
        wrestlingimg: false,
        playVid: false,
        bannerImg:true
    },
    methods:{
        box(){
            this.boximg = true,
            this.kickimg= false,
            this.muayimg= false,
            this.wrestlingimg = false;
        },
        kick(){
            this.boximg = false,
            this.kickimg=  true,
            this.muayimg= false,
            this.wrestlingimg = false;
        },
        muay(){
            this.boximg = false,
            this.kickimg= false,
            this.muayimg= true,
            this.wrestlingimg = false;
        },
        wrestle(){
            this.boximg = false,
            this.kickimg= false,
            this.muayimg= false,
            this.wrestlingimg = true;
        },
        Vid(){
            this.playVid=true;
            this.bannerImg = false;
        }

    },
    components:{
    }
})