<template>
  <div class="newPost">
       <div class="text-center">
       <b-col lg="5" class="pb-5"><b-button size="lg"  class="newPost-create-btn" @click="visible = true">Ajouter un  post </b-button></b-col>
       </div>
    <transition name="fade">
      <div class="overlay" v-if="visible">
          <div class="wrapper">
            <span class="form-close"  @click="visible = false">Fermer</span>
            <form class="newPost-form" @submit.prevent="sendNewPost()">

                <label for="newPost-title">Titre</label>
                <input id="newPost-title" type="text" placeholder="Titre de votre post..." required>

                <label for="newPost-post">Contenu</label>
                <input id="newPost-post" type="text"  placeholder="Contenu de votre post..." required>

                <button id="newPost-btn" type="submit" >Publier</button>

            </form>
          </div>
      </div>
    </transition>

  </div>
</template>

<script>
import axios from 'axios';
import 'core-js';

export default {
    name: 'NewPost',
   
    data(){
        return{
            visible: false,
            post: '',
        }
    },
    methods: {
        sendNewPost(){
            const title = document.getElementById("newPost-title").value;
            const post = document.getElementById("newPost-post").value;
      
            axios.post(`http://localhost:3001/api/post/`,
                    {
                        title,
                        post
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${this.$token}`
                        }
                    }
                )
                .then( this.visible = false)
                .then(this.$root.$emit('Posts'));
        }
    }
}
</script>

<style scoped> 
    .newPost{
        padding: 20px 20px 0px 20px ;   
    }
    .newPost-create-btn{
        margin: 30px auto;
        padding: 20px;
        max-width: 750px;
        font-size: 1.5rem;
        transition-duration: 0.2s;
        cursor: pointer;
    }
    .newPost-create-btn:hover{
        transform: scale(1.02);
    }
    .overlay{
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(31, 30, 30, 0.678);
        z-index: 1;
    }
    .wrapper{
        box-sizing: border-box;
        background-color: white;
        display: flex;
        flex-direction: column;
        padding: 5%;
        width: 800px;
        height: 80%;
        padding-bottom: 40%;
    }
    .form-close{
        cursor: pointer;
        align-self: flex-end;
    }
    .newPost-form{
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    form input{
        font-size: 1.05rem;
        padding: 10px;
        margin-bottom: 15px;
        text-align: top;
        text-align: left;
        margin-bottom: 30px;    
    }
    form label{
       
        font-weight: bold;
        font-size: 1.3rem;
        margin-bottom: 10px;
    }
    #newPost-content{
       
        height: 200px;
        padding: 10px;
    }
    #newPost-btn{
        margin-top: 20px;
        padding: 10px;
        font-size: 1.1rem;
        color: white;
        background-color: rgb(43, 42, 42);
        border: none;
        border-radius: 10px;
        transition-duration: 0.2s;
        cursor: pointer;
    }
    /* Transition */
    .fade-enter-active, .fade-leave-active {
    transition: opacity .8s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
</style>