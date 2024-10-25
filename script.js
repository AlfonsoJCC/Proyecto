
export default {
  data() {
    return {
      poem: ["En una noche oscura...", /* resto del poema */],
      correctCode: "",
      userCode: "",
      message: "",
      hint: "",
      attempts: 0,
      maxAttempts: 5,
      hintCount: 0,
    };
  },
  mounted() {
    this.generateCode();
  },
  methods: {
    generateCode() {
      // Selecciona letras específicas del poema
      const letters = [
        this.poem[0][2], // Tercera letra de la primera línea
        this.poem[1][0], // Primera letra de la segunda línea
        // Añade más lógica según el patrón deseado
      ];
      this.correctCode = letters.join("");
    },
    verifyCode() {
      this.attempts++;
      if (this.userCode === this.correctCode) {
        this.message = "¡Correcto! Has encontrado el código.";
      } else if (this.attempts >= this.maxAttempts) {
        this.message = `Lo siento, has agotado tus intentos. El código correcto era: ${this.correctCode}`;
      } else {
        this.message = "Buen intento, sigue intentándolo.";
      }
    },
    giveHint() {
      if (this.hintCount < 3) {
        this.hint = `Pista: La letra número ${this.hintCount + 1} es '${this.correctCode[this.hintCount]}'.`;
        this.hintCount++;
      }
    }
  },
};
