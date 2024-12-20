//asynchronous function always offloaded and when immidiate code lines run , it invokes callback.
setInterval(() => {
    console.log('hello world')
  }, 2000)
  console.log(`I will run first`)
  // process stays alive unless
  // Kill Process CONTROL + C
  // unexpected error