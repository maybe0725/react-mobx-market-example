import CounterStore from "./counter";
import MarketStroe from "./market";

class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.market = new MarketStroe(this);
  }
}

export default RootStore;
