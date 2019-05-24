import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CreatePiggy extends EthereumEvent {
  get params(): CreatePiggy__Params {
    return new CreatePiggy__Params(this);
  }
}

export class CreatePiggy__Params {
  _event: CreatePiggy;

  constructor(event: CreatePiggy) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get collateral(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get lotSize(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get strike(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get expiryBlock(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get isEuro(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }

  get isPut(): boolean {
    return this._event.parameters[7].value.toBoolean();
  }

  get RFP(): boolean {
    return this._event.parameters[8].value.toBoolean();
  }
}

export class TransferPiggy extends EthereumEvent {
  get params(): TransferPiggy__Params {
    return new TransferPiggy__Params(this);
  }
}

export class TransferPiggy__Params {
  _event: TransferPiggy;

  constructor(event: TransferPiggy) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UpdateRFP extends EthereumEvent {
  get params(): UpdateRFP__Params {
    return new UpdateRFP__Params(this);
  }
}

export class UpdateRFP__Params {
  _event: UpdateRFP;

  constructor(event: UpdateRFP) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get collateralERC(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get premiumERC(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get dataResolverNow(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get dataResolverAtExpiry(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get reqCollateral(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get lotSize(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get strikePrice(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get expiry(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }

  get isEuro(): boolean {
    return this._event.parameters[10].value.toBoolean();
  }

  get isPut(): boolean {
    return this._event.parameters[11].value.toBoolean();
  }
}

export class ReclaimAndBurn extends EthereumEvent {
  get params(): ReclaimAndBurn__Params {
    return new ReclaimAndBurn__Params(this);
  }
}

export class ReclaimAndBurn__Params {
  _event: ReclaimAndBurn;

  constructor(event: ReclaimAndBurn) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get RFP(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class StartAuction extends EthereumEvent {
  get params(): StartAuction__Params {
    return new StartAuction__Params(this);
  }
}

export class StartAuction__Params {
  _event: StartAuction;

  constructor(event: StartAuction) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get startBlock(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get startPrice(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get reservePrice(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get auctionLength(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get timeStep(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get priceStep(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class EndAuction extends EthereumEvent {
  get params(): EndAuction__Params {
    return new EndAuction__Params(this);
  }
}

export class EndAuction__Params {
  _event: EndAuction;

  constructor(event: EndAuction) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get RFP(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class SatisfyAuction extends EthereumEvent {
  get params(): SatisfyAuction__Params {
    return new SatisfyAuction__Params(this);
  }
}

export class SatisfyAuction__Params {
  _event: SatisfyAuction;

  constructor(event: SatisfyAuction) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get paidPremium(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get change(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get auctionPremium(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class RequestSettlementPrice extends EthereumEvent {
  get params(): RequestSettlementPrice__Params {
    return new RequestSettlementPrice__Params(this);
  }
}

export class RequestSettlementPrice__Params {
  _event: RequestSettlementPrice;

  constructor(event: RequestSettlementPrice) {
    this._event = event;
  }

  get feePayer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get oracleFee(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get dataResolver(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class OracleReturned extends EthereumEvent {
  get params(): OracleReturned__Params {
    return new OracleReturned__Params(this);
  }
}

export class OracleReturned__Params {
  _event: OracleReturned;

  constructor(event: OracleReturned) {
    this._event = event;
  }

  get resolver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class SettlePiggy extends EthereumEvent {
  get params(): SettlePiggy__Params {
    return new SettlePiggy__Params(this);
  }
}

export class SettlePiggy__Params {
  _event: SettlePiggy;

  constructor(event: SettlePiggy) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get holderPayout(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get writerPayout(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ClaimPayout extends EthereumEvent {
  get params(): ClaimPayout__Params {
    return new ClaimPayout__Params(this);
  }
}

export class ClaimPayout__Params {
  _event: ClaimPayout;

  constructor(event: ClaimPayout) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get paymentToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call("supportsInterface", [
      EthereumValue.fromFixedBytes(interfaceId)
    ]);
    return result[0].toBoolean();
  }

  tokenId(): BigInt {
    let result = super.call("tokenId", []);
    return result[0].toBigInt();
  }

  getDetails(_tokenId: BigInt): EthereumTuple {
    let result = super.call("getDetails", [
      EthereumValue.fromUnsignedBigInt(_tokenId)
    ]);
    return result[0].toTuple();
  }

  getAuctionDetails(_tokenId: BigInt): EthereumTuple {
    let result = super.call("getAuctionDetails", [
      EthereumValue.fromUnsignedBigInt(_tokenId)
    ]);
    return result[0].toTuple();
  }

  getOwnedPiggies(_owner: Address): Array<BigInt> {
    let result = super.call("getOwnedPiggies", [
      EthereumValue.fromAddress(_owner)
    ]);
    return result[0].toBigIntArray();
  }

  getERC20balance(_owner: Address, _erc20: Address): BigInt {
    let result = super.call("getERC20balance", [
      EthereumValue.fromAddress(_owner),
      EthereumValue.fromAddress(_erc20)
    ]);
    return result[0].toBigInt();
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreatePiggyCall extends EthereumCall {
  get inputs(): CreatePiggyCall__Inputs {
    return new CreatePiggyCall__Inputs(this);
  }

  get outputs(): CreatePiggyCall__Outputs {
    return new CreatePiggyCall__Outputs(this);
  }
}

export class CreatePiggyCall__Inputs {
  _call: CreatePiggyCall;

  constructor(call: CreatePiggyCall) {
    this._call = call;
  }

  get _collateralERC(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _premiumERC(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _dataResolverNow(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _dataResolverAtExpiry(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _collateral(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _lotSize(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _strikePrice(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _expiry(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get _isEuro(): boolean {
    return this._call.inputValues[8].value.toBoolean();
  }

  get _isPut(): boolean {
    return this._call.inputValues[9].value.toBoolean();
  }

  get _isRequest(): boolean {
    return this._call.inputValues[10].value.toBoolean();
  }
}

export class CreatePiggyCall__Outputs {
  _call: CreatePiggyCall;

  constructor(call: CreatePiggyCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends EthereumCall {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class UpdateRFPCall extends EthereumCall {
  get inputs(): UpdateRFPCall__Inputs {
    return new UpdateRFPCall__Inputs(this);
  }

  get outputs(): UpdateRFPCall__Outputs {
    return new UpdateRFPCall__Outputs(this);
  }
}

export class UpdateRFPCall__Inputs {
  _call: UpdateRFPCall;

  constructor(call: UpdateRFPCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _collateralERC(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _premiumERC(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _dataResolverNow(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _dataResolverAtExpiry(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _reqCollateral(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _lotSize(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _strikePrice(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get _expiry(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }

  get _isEuro(): boolean {
    return this._call.inputValues[9].value.toBoolean();
  }

  get _isPut(): boolean {
    return this._call.inputValues[10].value.toBoolean();
  }
}

export class UpdateRFPCall__Outputs {
  _call: UpdateRFPCall;

  constructor(call: UpdateRFPCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ReclaimAndBurnCall extends EthereumCall {
  get inputs(): ReclaimAndBurnCall__Inputs {
    return new ReclaimAndBurnCall__Inputs(this);
  }

  get outputs(): ReclaimAndBurnCall__Outputs {
    return new ReclaimAndBurnCall__Outputs(this);
  }
}

export class ReclaimAndBurnCall__Inputs {
  _call: ReclaimAndBurnCall;

  constructor(call: ReclaimAndBurnCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ReclaimAndBurnCall__Outputs {
  _call: ReclaimAndBurnCall;

  constructor(call: ReclaimAndBurnCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class StartAuctionCall extends EthereumCall {
  get inputs(): StartAuctionCall__Inputs {
    return new StartAuctionCall__Inputs(this);
  }

  get outputs(): StartAuctionCall__Outputs {
    return new StartAuctionCall__Outputs(this);
  }
}

export class StartAuctionCall__Inputs {
  _call: StartAuctionCall;

  constructor(call: StartAuctionCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _startPrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _reservePrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _auctionLength(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _timeStep(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _priceStep(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class StartAuctionCall__Outputs {
  _call: StartAuctionCall;

  constructor(call: StartAuctionCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class EndAuctionCall extends EthereumCall {
  get inputs(): EndAuctionCall__Inputs {
    return new EndAuctionCall__Inputs(this);
  }

  get outputs(): EndAuctionCall__Outputs {
    return new EndAuctionCall__Outputs(this);
  }
}

export class EndAuctionCall__Inputs {
  _call: EndAuctionCall;

  constructor(call: EndAuctionCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class EndAuctionCall__Outputs {
  _call: EndAuctionCall;

  constructor(call: EndAuctionCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SatisfyAuctionCall extends EthereumCall {
  get inputs(): SatisfyAuctionCall__Inputs {
    return new SatisfyAuctionCall__Inputs(this);
  }

  get outputs(): SatisfyAuctionCall__Outputs {
    return new SatisfyAuctionCall__Outputs(this);
  }
}

export class SatisfyAuctionCall__Inputs {
  _call: SatisfyAuctionCall;

  constructor(call: SatisfyAuctionCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SatisfyAuctionCall__Outputs {
  _call: SatisfyAuctionCall;

  constructor(call: SatisfyAuctionCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RequestSettlementPriceCall extends EthereumCall {
  get inputs(): RequestSettlementPriceCall__Inputs {
    return new RequestSettlementPriceCall__Inputs(this);
  }

  get outputs(): RequestSettlementPriceCall__Outputs {
    return new RequestSettlementPriceCall__Outputs(this);
  }
}

export class RequestSettlementPriceCall__Inputs {
  _call: RequestSettlementPriceCall;

  constructor(call: RequestSettlementPriceCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _oracleFee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RequestSettlementPriceCall__Outputs {
  _call: RequestSettlementPriceCall;

  constructor(call: RequestSettlementPriceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class _callbackCall extends EthereumCall {
  get inputs(): _callbackCall__Inputs {
    return new _callbackCall__Inputs(this);
  }

  get outputs(): _callbackCall__Outputs {
    return new _callbackCall__Outputs(this);
  }
}

export class _callbackCall__Inputs {
  _call: _callbackCall;

  constructor(call: _callbackCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class _callbackCall__Outputs {
  _call: _callbackCall;

  constructor(call: _callbackCall) {
    this._call = call;
  }
}

export class SettlePiggyCall extends EthereumCall {
  get inputs(): SettlePiggyCall__Inputs {
    return new SettlePiggyCall__Inputs(this);
  }

  get outputs(): SettlePiggyCall__Outputs {
    return new SettlePiggyCall__Outputs(this);
  }
}

export class SettlePiggyCall__Inputs {
  _call: SettlePiggyCall;

  constructor(call: SettlePiggyCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SettlePiggyCall__Outputs {
  _call: SettlePiggyCall;

  constructor(call: SettlePiggyCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ClaimPayoutCall extends EthereumCall {
  get inputs(): ClaimPayoutCall__Inputs {
    return new ClaimPayoutCall__Inputs(this);
  }

  get outputs(): ClaimPayoutCall__Outputs {
    return new ClaimPayoutCall__Outputs(this);
  }
}

export class ClaimPayoutCall__Inputs {
  _call: ClaimPayoutCall;

  constructor(call: ClaimPayoutCall) {
    this._call = call;
  }

  get _paymentToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ClaimPayoutCall__Outputs {
  _call: ClaimPayoutCall;

  constructor(call: ClaimPayoutCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class KillCall extends EthereumCall {
  get inputs(): KillCall__Inputs {
    return new KillCall__Inputs(this);
  }

  get outputs(): KillCall__Outputs {
    return new KillCall__Outputs(this);
  }
}

export class KillCall__Inputs {
  _call: KillCall;

  constructor(call: KillCall) {
    this._call = call;
  }
}

export class KillCall__Outputs {
  _call: KillCall;

  constructor(call: KillCall) {
    this._call = call;
  }
}
