export default {
    template: `
        <div class="login-page">
            <img src="./images/icons/back.svg" alt="back" 
                width="42px" class="back-button" @click="onBackPressed">
                
            <img 
                src="./images/icons/logo.svg"
                alt="logo"
                width="72px"
            >

            <div class="login-page-title">
                POLONEZ AUTOMOTIVE
            </div>

            <form class="login-page-form" @submit="onSubmit">
                <div class="form-entry">
                    <label for="email">Email Address</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="johnsmith@gmail.com"
                        v-model="email"
                        required
                    > 
                </div>
                <div class="form-entry">
                    <label for="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="*********"
                        v-model="password"
                        required
                    > 
                </div>
                <input type="submit" value="Login" />
                <input type="button" value="Sign Up" @click="onSignupPressed" />
            </form>
        </div>
    `,
    data: function() {
        return {
            email: "",
            password: "",
        };
    },
    mounted: function() {
        this.$store.dispatch("setFullscreen", true);
    },
    methods: {
        onBackPressed: function() {
            this.$store.dispatch('changePage', 0);
        },

        onSubmit: function(e) {
            if (this.email.length > 0 && this.password.length > 0) {
                this.$store.dispatch('signIn', { 
                    email: this.email, 
                    password: this.password 
                });
            }

            e.preventDefault();
        },

        onSignupPressed: function() {
            this.$store.dispatch('changePage', 5);
        }
    }
};