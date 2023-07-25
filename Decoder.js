/* MessageDecoder */
class MessageDecoder {
    constructor() {
        this.shiftedChars = [];
    };
    Decode(string) {
        try {
            this.shiftedChars.length = 0;
            for (let i = 0; i < string.length; i++) {
                const shiftedCharCode = (string.charCodeAt(i) + 42069) % 256;
                this.shiftedChars.push(shiftedCharCode);
            }
            const shiftedString = String.fromCharCode(...this.shiftedChars);
            const decodedString = atob(shiftedString);
            return decodedString;
        } catch (error) {
            console.error("Error Decoding", error);
        };
    };
};
let decoder = new MessageDecoder();