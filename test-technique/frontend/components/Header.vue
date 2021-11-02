<template>
    <div class="header">
        <h1>
            mon application web
            
        </h1>

        <nav>
            <router-link to='/profile'>
           
            </router-link>
            <b-button id="disconnect-btn" @click = disconnect()>Se déconnecter</b-button>
           
        </nav>
        <div>
            <template>
  <div>
    <b-avatar variant="secondary"></b-avatar>
    <b-avatar variant="primary"></b-avatar>
    <b-avatar variant="dark"></b-avatar>
    <b-avatar variant="light"></b-avatar>
    <b-avatar variant="success"></b-avatar>
    <b-avatar variant="danger"></b-avatar>
    <b-avatar variant="warning"></b-avatar>
    <b-avatar variant="info"></b-avatar>
  </div>
</template>
        </div>
    </div> 
    
</template>

<script>
export default {
    name: 'Header',

    methods: {
        disconnect(){
            localStorage.removeItem('user');
            location.href = "/";
        }
    }
}
</script>

<style scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 70px 20px 70px;
    }

    .header img{
        width: 250px;
        height: auto;
    }

    nav{
        display: flex;
    }

    nav div{
        margin-left: 30px;
        font-weight: bold;
        cursor: pointer;
        transition-duration: .2s;
    }

    .fas{
        font-size: 1.5rem;
    }

    nav div:hover{
        color: rgb(117, 117, 117);
    }

    @media (max-width: 670px) {
        .header{
            flex-direction: column;
            padding: 30px 20px 20px 20px;
        }
    }
</style>