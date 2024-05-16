<template>
  <div class="body">
    
    <div id="link_container" class="link_container">
      <div id="input_and_message" class="ui two col centered padded grid">
        <div v-if="!showMessage" class="column">
          <div class="ui labeled massive input" :class="{'error': error.active}">
            <div class="ui label" :class="{'error_bg': error.active}">
              https://
            </div>
            <input type="text" v-model="url" placeholder="Insert link">
          </div>
          <button class="ui massive inverted button red" @click="submit">APPLY</button>
        </div>
        <div v-else-if="showMessage" class="column">
          <div class="ui segment">
            <p class="message">Here's is your shortened url:</p><br>
            <b><p class="message">{{ shortenedUrl.shortUrl }}</p></b>
          </div>
        </div>
      </div>
      <span class="error message" v-if="error.active">{{error.errorMessage}}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>

  let url: string
  let error = useError()
  let shortenedUrl = useShortenedUrl()
  let showMessage = useShowMessage()
  async function submit() {
    if (!url.includes('https://')) {
      url = 'https://' + url
    }
    try {
      $('#link_container').transition('horizontal flip', 500)
      shortenedUrl.value = await $fetch("/api/shorten", {
        method: "POST",
        body: {
          longUrl: url
        }
      })
      
      showMessage.value = true
      error.value = {active: false, errorMessage: ''}
      $('#link_container').transition('horizontal flip', 500)
    } catch (err) {
      console.log(err.statusMessage)
      error.value = {active: true, errorMessage: err.statusMessage}
    }
  }
  

</script>

<style lang="scss">
  .body {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .link_container {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    font-family:Georgia, 'Times New Roman', Times, serif;
  }
  .segment {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 550px;
    height: 250px;
  }
  .message {
    line-height: 6px;
    font-size: 22px;
  }
  .error {
    border-color: red;
    color: red;
  }
  .ui.label.error_bg {
    background-color: red;
  }
</style>