module.exports = {
    name: 'v-rating',

    template: '<div class="ui rating" :class="[type]"></div>',

    props: {
        value: {
          type: Number,
          default: 0,
          required: true
        },
        type: {
          type: String,
          default: "star",
          required: false
        },
        clearable: {
          type: Boolean,
          default: true,
          required: false
        },
        max: {
          type: Number,
          default: 5,
          required: false
        },
        initial: {
          type: Number,
          default: 0,
          required: false
        }
    },

    watch: {
      value: function(val, oldVal) {
        if (val == null) {
          $(this.$el).rating("clear rating");
        }
      }
    },

    mounted: function() {
      const t = this;
      $(t.$el).rating({
        initialRating: t.initial,
        maxRating: t.max,
        clearable: t.clearable,
        onRate: function(rating) {
          t.$emit("input", rating);
        }
      });
    }
};