<template>
  <div class="login">
    <div class="container__image">
      <div class="image"></div>
    </div>
    <div class="description">
      <section class="title">Inicia sesión en VueGram</section>
      <section class="subtitle">
        Selecciona tu pais <br/>y escribe tu telefono.
      </section>
    </div>
    <div class="container__select">
      <select v-model="countries" @change="searchCode()">
        <option value="AR">Argentina</option>
        <option value="BO">Bolivia</option>
        <option value="BR">Brazil</option>
        <option value="CL">Chile</option>
        <option value="CO">Colombia</option>
        <option value="EC">Ecuador</option>
        <option value="PY">Paraguay</option>
        <option value="UY">Uruguay</option>
        <option value="MX">Mexico</option>
      </select>
    </div>
    <div class="container__phone">
      <input type="text" class="phoneCode" v-model="code">
      <input type="text" autofocus class="phone">
    </div>
    <div class="container__button">
      <div id="sign-container"></div>
      <button
        id="sign"
        class="next"
      >INGRESAR</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue';
    const countries = ref('MX')
    const code = ref('+52')
    const searchCode = async () :Promise<void> =>{
        try{
            let response:any = await fetch(`https://restcountries.com/v2/alpha/${countries.value}`)
            let codes:object = await response.json()
            code.value = `+ ${codes.callingCodes[0]}` 
        }catch(error) {
            console.log(error)
        }
    }
</script>
<style lang="scss" scoped>
  .login {
    background: #212121;
    height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .container__image {
      padding-bottom: 10px;
      .image {
        background: url('/logoTelegram.png') no-repeat;
        background-position: center;
        background-size: contain;
        height: 150px;
        width: 150px;
      }
    }
    .description {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #FFF;
      .title {
        margin-top: 15px;
        font-size: 1.8rem;
        font-weight: bold;
      }
      .subtitle {
        text-align: center;
        margin-top: 7px;
        font-size: 1.1rem;
        margin-bottom: 10px;
        font-weight: bold;
        color: #666666;
      }
    }
    .container__select {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding-top: 15px;
      select {
        width: 250px;
        padding: 10px;
        outline: none;
        border: none;
        height: 40px;
        border-radius: 7px;
      }
    }
    .container__phone {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding-top: 15px;
      .phoneCode {
        width: 50px;
        padding: 10px;
        padding-right: 0px;
        outline: none;
        border: none;
        height: 20px;
        text-align: right;
        border-radius: 7px 0px 0px 7px;
      }
      .phone {
        width: 175px;
        padding: 10px;
        padding-left: 5px;
        outline: none;
        border: none;
        height: 20px;
        border-radius: 0px 7px 7px 0px;
      }
    }
    .container__button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
      .next {
        text-align: center;
        width: 250px;
        padding: 10px;
        border: none;
        background: #2EA6DA;
        color: #FFF;
        outline: none;
        border-radius: 7px;
        cursor: pointer;
      }
      .disabled {
        background: #CDCDCD;
        cursor: auto
      }
    }
  }
</style>


<!-- <script lang="ts" setup>
    //inject is for get the plugins on vue 3 before was this.$storage like the key
    import {inject} from 'vue'
    import IStorage from '../interfaces/Storage'
    const Storage = inject<IStorage>('Storage');
    console.log(Storage?.set('new', 'hola mundo'))
</script> -->