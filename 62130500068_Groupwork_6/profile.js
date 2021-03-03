const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
    },
    chosenCareer: {
        presence: true
    }
}

const app = Vue.createApp({
    data() {
        return {
            image: './img/Dark Exile.png',
            edu: 'Sophomore at SIT, KMUTT',
            follower_count: '76',
            post_count: '22',
            rating: '8.6',

            //Validation
            errors: null,
            firstname: 'Phichitphol',
            lastname: 'Bunyakanok',
            gender: null,
            age: 21,
            email: null,
            phone: null,
            chosenCareer: null,
            career_lists: [{
                    career_id: 1,
                    career_name: 'Bachelor of Science (IT)'
                },
                {
                    career_id: 2,
                    career_name: 'Bachelor of Science (CS)'
                },
                {
                    career_id: 3,
                    career_name: 'Bachelor of Science (DSI)'
                }
            ],
        }
    },
    methods: {
        checkForm(e) {
            this.errors = validate({
                    firstname: this.firstname,
                    lastname: this.lastname,
                    age: this.age,
                    gender: this.gender,
                    email: this.email,
                    phone: this.phone,
                    chosenCareer: this.chosenCareer
                },
                constraints)
            if (this.errors) {
                e.preventDefault();
            } else {
                window.alert("Register Sucessful ! \n" +
                    "Name: " + this.firstname + " " + this.lastname + "\n" +
                    "Email: " + this.email + " Phone number: " + this.phone + "\n" +
                    "Career: " + this.career_lists[this.chosenCareer - 1].career_name);
            }

        },
    },

})