interface SignatureData {
    body: string;
    signature: string;
    destination: string;
  }
  
  class SignatureStore {
    private store: SignatureData | null = null;
  
    set(data: SignatureData): void {
      this.store = data;
      setTimeout(() => this.clear(), 5 * 60 * 1000);
    }
  
    get(): SignatureData | null {
      return this.store;
    }
  
    clear(): void {
      this.store = null;
    }
  }
  
  export const signatureStore = new SignatureStore();