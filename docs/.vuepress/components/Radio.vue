<template>
  <div class="container">
    <div class="radio">
      <input id="radio-1" name="radio" type="radio" checked>
      <label for="radio-1" class="radio-label">Game</label>
    </div>

    <div class="radio">
      <input id="radio-2" name="radio" type="radio">
      <label for="radio-2" class="radio-label">Food</label>
    </div>

    <div class="radio">
      <input id="radio-3" name="radio" type="radio">
      <label for="radio-3" class="radio-label">Work</label>
    </div>

    <div class="radio">
      <input id="radio-4" name="radio" type="radio">
      <label for="radio-4" class="radio-label">Money</label>
    </div>
  </div>

</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  $color1: #f4f4f4;
  $color2: #3197EE;

  .radio {
    margin: 1rem;

    input[type="radio"] {
      position: absolute;
      opacity: 0;

      +.radio-label {
        &:before {
          content: '';
          background: var(--c-bg);
          border-radius: 100%;
          border: 1px solid darken($color1, 25%);
          display: inline-block;
          width: 1.4em;
          height: 1.4em;
          position: relative;
          top: -0.2em;
          margin-right: 1em;
          vertical-align: top;
          cursor: pointer;
          text-align: center;
          transition: all 250ms ease;
        }
      }

      &:checked {
        +.radio-label {
          &:before {
            background-color: var(--c-brand);
            box-shadow: inset 0 0 0 4px var(--c-bg);
          }
        }
      }

      &:focus {
        +.radio-label {
          &:before {
            outline: none;
            border-color: var(--c-brand);
          }
        }
      }

      // &:disabled {
      //   + .radio-label {
      //     &:before {
      //       box-shadow: inset 0 0 0 4px $color1;
      //       border-color: darken($color1, 25%);
      //       background: darken($color1, 25%);
      //     }
      //   }
      // }
      +.radio-label {
        &:empty {
          &:before {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>