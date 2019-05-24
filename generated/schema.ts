import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Piggy extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Piggy entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Piggy entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Piggy", id.toString(), this);
  }

  static load(id: string): Piggy | null {
    return store.get("Piggy", id) as Piggy | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get collateral(): BigInt {
    let value = this.get("collateral");
    return value.toBigInt();
  }

  set collateral(value: BigInt) {
    this.set("collateral", Value.fromBigInt(value));
  }

  get lotSize(): BigInt {
    let value = this.get("lotSize");
    return value.toBigInt();
  }

  set lotSize(value: BigInt) {
    this.set("lotSize", Value.fromBigInt(value));
  }

  get strike(): BigInt {
    let value = this.get("strike");
    return value.toBigInt();
  }

  set strike(value: BigInt) {
    this.set("strike", Value.fromBigInt(value));
  }

  get expiryBlock(): BigInt {
    let value = this.get("expiryBlock");
    return value.toBigInt();
  }

  set expiryBlock(value: BigInt) {
    this.set("expiryBlock", Value.fromBigInt(value));
  }

  get isEuro(): boolean {
    let value = this.get("isEuro");
    return value.toBoolean();
  }

  set isEuro(value: boolean) {
    this.set("isEuro", Value.fromBoolean(value));
  }

  get isPut(): boolean {
    let value = this.get("isPut");
    return value.toBoolean();
  }

  set isPut(value: boolean) {
    this.set("isPut", Value.fromBoolean(value));
  }

  get RFP(): boolean {
    let value = this.get("RFP");
    return value.toBoolean();
  }

  set RFP(value: boolean) {
    this.set("RFP", Value.fromBoolean(value));
  }

  get isOnAuction(): boolean {
    let value = this.get("isOnAuction");
    return value.toBoolean();
  }

  set isOnAuction(value: boolean) {
    this.set("isOnAuction", Value.fromBoolean(value));
  }

  get startBlock(): BigInt | null {
    let value = this.get("startBlock");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set startBlock(value: BigInt | null) {
    if (value === null) {
      this.unset("startBlock");
    } else {
      this.set("startBlock", Value.fromBigInt(value as BigInt));
    }
  }

  get startPrice(): BigInt | null {
    let value = this.get("startPrice");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set startPrice(value: BigInt | null) {
    if (value === null) {
      this.unset("startPrice");
    } else {
      this.set("startPrice", Value.fromBigInt(value as BigInt));
    }
  }

  get reservePrice(): BigInt | null {
    let value = this.get("reservePrice");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set reservePrice(value: BigInt | null) {
    if (value === null) {
      this.unset("reservePrice");
    } else {
      this.set("reservePrice", Value.fromBigInt(value as BigInt));
    }
  }

  get auctionLength(): BigInt | null {
    let value = this.get("auctionLength");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set auctionLength(value: BigInt | null) {
    if (value === null) {
      this.unset("auctionLength");
    } else {
      this.set("auctionLength", Value.fromBigInt(value as BigInt));
    }
  }

  get timeStep(): BigInt | null {
    let value = this.get("timeStep");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timeStep(value: BigInt | null) {
    if (value === null) {
      this.unset("timeStep");
    } else {
      this.set("timeStep", Value.fromBigInt(value as BigInt));
    }
  }

  get priceStep(): BigInt | null {
    let value = this.get("priceStep");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set priceStep(value: BigInt | null) {
    if (value === null) {
      this.unset("priceStep");
    } else {
      this.set("priceStep", Value.fromBigInt(value as BigInt));
    }
  }

  get auctionDuration(): BigInt | null {
    let value = this.get("auctionDuration");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set auctionDuration(value: BigInt | null) {
    if (value === null) {
      this.unset("auctionDuration");
    } else {
      this.set("auctionDuration", Value.fromBigInt(value as BigInt));
    }
  }
}

export class TransferPiggy extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TransferPiggy entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TransferPiggy entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TransferPiggy", id.toString(), this);
  }

  static load(id: string): TransferPiggy | null {
    return store.get("TransferPiggy", id) as TransferPiggy | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }
}

export class UpdateRFP extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UpdateRFP entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UpdateRFP entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UpdateRFP", id.toString(), this);
  }

  static load(id: string): UpdateRFP | null {
    return store.get("UpdateRFP", id) as UpdateRFP | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get collateralERC(): Bytes {
    let value = this.get("collateralERC");
    return value.toBytes();
  }

  set collateralERC(value: Bytes) {
    this.set("collateralERC", Value.fromBytes(value));
  }

  get premiumERC(): Bytes {
    let value = this.get("premiumERC");
    return value.toBytes();
  }

  set premiumERC(value: Bytes) {
    this.set("premiumERC", Value.fromBytes(value));
  }

  get dataResolverNow(): Bytes {
    let value = this.get("dataResolverNow");
    return value.toBytes();
  }

  set dataResolverNow(value: Bytes) {
    this.set("dataResolverNow", Value.fromBytes(value));
  }

  get dataResolverAtExpiry(): Bytes {
    let value = this.get("dataResolverAtExpiry");
    return value.toBytes();
  }

  set dataResolverAtExpiry(value: Bytes) {
    this.set("dataResolverAtExpiry", Value.fromBytes(value));
  }

  get reqCollateral(): BigInt {
    let value = this.get("reqCollateral");
    return value.toBigInt();
  }

  set reqCollateral(value: BigInt) {
    this.set("reqCollateral", Value.fromBigInt(value));
  }

  get lotSize(): BigInt {
    let value = this.get("lotSize");
    return value.toBigInt();
  }

  set lotSize(value: BigInt) {
    this.set("lotSize", Value.fromBigInt(value));
  }

  get strikePrice(): BigInt {
    let value = this.get("strikePrice");
    return value.toBigInt();
  }

  set strikePrice(value: BigInt) {
    this.set("strikePrice", Value.fromBigInt(value));
  }

  get expiry(): BigInt {
    let value = this.get("expiry");
    return value.toBigInt();
  }

  set expiry(value: BigInt) {
    this.set("expiry", Value.fromBigInt(value));
  }

  get isEuro(): boolean {
    let value = this.get("isEuro");
    return value.toBoolean();
  }

  set isEuro(value: boolean) {
    this.set("isEuro", Value.fromBoolean(value));
  }

  get isPut(): boolean {
    let value = this.get("isPut");
    return value.toBoolean();
  }

  set isPut(value: boolean) {
    this.set("isPut", Value.fromBoolean(value));
  }
}

export class ReclaimAndBurn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ReclaimAndBurn entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ReclaimAndBurn entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ReclaimAndBurn", id.toString(), this);
  }

  static load(id: string): ReclaimAndBurn | null {
    return store.get("ReclaimAndBurn", id) as ReclaimAndBurn | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get RFP(): boolean {
    let value = this.get("RFP");
    return value.toBoolean();
  }

  set RFP(value: boolean) {
    this.set("RFP", Value.fromBoolean(value));
  }
}

export class StartAuction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StartAuction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StartAuction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StartAuction", id.toString(), this);
  }

  static load(id: string): StartAuction | null {
    return store.get("StartAuction", id) as StartAuction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get startBlock(): BigInt {
    let value = this.get("startBlock");
    return value.toBigInt();
  }

  set startBlock(value: BigInt) {
    this.set("startBlock", Value.fromBigInt(value));
  }

  get startPrice(): BigInt {
    let value = this.get("startPrice");
    return value.toBigInt();
  }

  set startPrice(value: BigInt) {
    this.set("startPrice", Value.fromBigInt(value));
  }

  get reservePrice(): BigInt {
    let value = this.get("reservePrice");
    return value.toBigInt();
  }

  set reservePrice(value: BigInt) {
    this.set("reservePrice", Value.fromBigInt(value));
  }

  get auctionLength(): BigInt {
    let value = this.get("auctionLength");
    return value.toBigInt();
  }

  set auctionLength(value: BigInt) {
    this.set("auctionLength", Value.fromBigInt(value));
  }

  get timeStep(): BigInt {
    let value = this.get("timeStep");
    return value.toBigInt();
  }

  set timeStep(value: BigInt) {
    this.set("timeStep", Value.fromBigInt(value));
  }

  get priceStep(): BigInt {
    let value = this.get("priceStep");
    return value.toBigInt();
  }

  set priceStep(value: BigInt) {
    this.set("priceStep", Value.fromBigInt(value));
  }
}

export class EndAuction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save EndAuction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save EndAuction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("EndAuction", id.toString(), this);
  }

  static load(id: string): EndAuction | null {
    return store.get("EndAuction", id) as EndAuction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get RFP(): boolean {
    let value = this.get("RFP");
    return value.toBoolean();
  }

  set RFP(value: boolean) {
    this.set("RFP", Value.fromBoolean(value));
  }
}

export class SatisfyAuction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SatisfyAuction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SatisfyAuction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SatisfyAuction", id.toString(), this);
  }

  static load(id: string): SatisfyAuction | null {
    return store.get("SatisfyAuction", id) as SatisfyAuction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get paidPremium(): BigInt {
    let value = this.get("paidPremium");
    return value.toBigInt();
  }

  set paidPremium(value: BigInt) {
    this.set("paidPremium", Value.fromBigInt(value));
  }

  get change(): BigInt {
    let value = this.get("change");
    return value.toBigInt();
  }

  set change(value: BigInt) {
    this.set("change", Value.fromBigInt(value));
  }

  get auctionPremium(): BigInt {
    let value = this.get("auctionPremium");
    return value.toBigInt();
  }

  set auctionPremium(value: BigInt) {
    this.set("auctionPremium", Value.fromBigInt(value));
  }
}

export class RequestSettlementPrice extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save RequestSettlementPrice entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RequestSettlementPrice entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RequestSettlementPrice", id.toString(), this);
  }

  static load(id: string): RequestSettlementPrice | null {
    return store.get(
      "RequestSettlementPrice",
      id
    ) as RequestSettlementPrice | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get feePayer(): Bytes {
    let value = this.get("feePayer");
    return value.toBytes();
  }

  set feePayer(value: Bytes) {
    this.set("feePayer", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get oracleFee(): BigInt {
    let value = this.get("oracleFee");
    return value.toBigInt();
  }

  set oracleFee(value: BigInt) {
    this.set("oracleFee", Value.fromBigInt(value));
  }

  get dataResolver(): Bytes {
    let value = this.get("dataResolver");
    return value.toBytes();
  }

  set dataResolver(value: Bytes) {
    this.set("dataResolver", Value.fromBytes(value));
  }
}

export class OracleReturned extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OracleReturned entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OracleReturned entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OracleReturned", id.toString(), this);
  }

  static load(id: string): OracleReturned | null {
    return store.get("OracleReturned", id) as OracleReturned | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get resolver(): Bytes {
    let value = this.get("resolver");
    return value.toBytes();
  }

  set resolver(value: Bytes) {
    this.set("resolver", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }
}

export class SettlePiggy extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SettlePiggy entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SettlePiggy entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SettlePiggy", id.toString(), this);
  }

  static load(id: string): SettlePiggy | null {
    return store.get("SettlePiggy", id) as SettlePiggy | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get holderPayout(): BigInt {
    let value = this.get("holderPayout");
    return value.toBigInt();
  }

  set holderPayout(value: BigInt) {
    this.set("holderPayout", Value.fromBigInt(value));
  }

  get writerPayout(): BigInt {
    let value = this.get("writerPayout");
    return value.toBigInt();
  }

  set writerPayout(value: BigInt) {
    this.set("writerPayout", Value.fromBigInt(value));
  }
}

export class ClaimPayout extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ClaimPayout entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ClaimPayout entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ClaimPayout", id.toString(), this);
  }

  static load(id: string): ClaimPayout | null {
    return store.get("ClaimPayout", id) as ClaimPayout | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get paymentToken(): Bytes {
    let value = this.get("paymentToken");
    return value.toBytes();
  }

  set paymentToken(value: Bytes) {
    this.set("paymentToken", Value.fromBytes(value));
  }
}
