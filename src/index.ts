import crypto from "crypto"

interface BlockShape {
    hash: string; // blockChain의 고유 명사 같은 느낌
    prevHash: string;
    height: number;
    data: string;
}

class Block implements BlockShape{
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string,
    ) {
        this.hash = Block.calculateHash(prevHash, height, data)
    }
    static calculateHash(prevHash: string, height: number, data:string) {
        const toHash = `${prevHash}${height}${data}`
        return crypto.createHash("sha256").update(toHash).digest("hex")
    }
}