<template>
  <div>
    <div class="wrapper-text">
      <h1>宝宝错了，还木有开发介样式的页面。</h1>
    </div>
    <div class="wrapper">
      <span class="emoji sad">
        <span class="eyes"></span>
        <span class="mouth"></span>
	    </span>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  h1{
    color: #9ea7b4;
    font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
  }
  .wrapper-text {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
  }

  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
  }

  .emoji {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: yellow;
    display: inline-block;
    position: relative;
    margin: 20px 20px 0 20px;
  }

  .emoji .eyes {
    position: absolute;
    left: 50%;
    width: 60px;
    top: 80px;
  }

  .emoji .eyes::before, .emoji .eyes::after {
    content: '';
    background: black;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }

  .emoji .eyes::before {
    float: left;
  }

  .emoji .eyes::after {
    float: right;
    left: 100px;
    top: 50px;
  }

  .emoji.happy {
    transform: rotate(10deg);
    background: #47cf73;
  }

  .emoji.happy .mouth, .emoji.happy .eyes {
    animation: happy 1s ease-in-out infinite;
  }

  .emoji.happy .eyes::before, .emoji.happy .eyes::after {
    height: 15px;
    animation: blinkeyes 2s ease-in-out infinite;
  }

  .emoji.happy .mouth {
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
    background: black;
    width: 30px;
    height: 15px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .emoji.happy .mouth::after {
    content: '';
    position: absolute;
    background: red;
    width: 10px;
    height: 5px;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
  }

  .emoji.neutral {
    background: #fcd000;
  }

  .emoji.neutral .mouth, .emoji.neutral .eyes {
    top: 70px;
    transform: translate(-50%, -50%);
    animation: neutral 4s ease-in-out infinite;
  }

  .emoji.neutral .eyes::before, .emoji.neutral .eyes::after {
    animation: blinkeyes 3s ease-in-out infinite;
  }

  .emoji.neutral .mouth {
    position: absolute;
    left: 50%;
    top: 70%;
    background: black;
    width: 30px;
    height: 10px;
    border-radius: 50%;
  }

  .emoji.sad {
    background: #ff3c41;
  }

  .emoji.sad .eyes, .emoji.sad .mouth {
    animation: sad 1s ease-in-out infinite;
  }

  .emoji.sad .eyes::before, .emoji.sad .eyes::after {
    animation: blinkeyes 3s ease-in-out infinite 1s;
  }

  .emoji.sad .mouth {
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
    border-top: 6px solid black;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    border-bottom: 8px solid transparent;
    width: 25px;
    height: 10px;
    border-top-right-radius: 1999px;
    border-top-left-radius: 1999px;
  }

  @keyframes happy {
    0% {
      transform: translate(-50%, -50%);
    }
    60% {
      transform: translate(-50%, -100%);
    }
    100% {
      transform: translate(-50%, -50%);
    }
  }

  @keyframes neutral {
    0% {
      height: 10px;
    }
    30% {
      height: 15px;
    }
    100% {
      height: 10px;
    }
  }

  @keyframes sad {
    0% {
      transform: translate(-60%, -50%);
    }
    60% {
      transform: translate(-40%, -50%);
    }
    100% {
      transform: translate(-60%, -50%);
    }
  }

  @keyframes blinkeyes {
    0% {
      transform: scaleY(1);
    }
    97% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(0);
    }
  }
</style>
