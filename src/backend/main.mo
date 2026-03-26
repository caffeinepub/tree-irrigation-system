import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Map "mo:core/Map";
import Array "mo:core/Array";

actor {
  type QuoteRequest = {
    name : Text;
    email : Text;
    selectedPlan : Text;
    message : Text;
    timestamp : Int;
    id : Principal;
  };

  let quoteRequests = Map.empty<Principal, QuoteRequest>();

  public shared ({ caller }) func submitQuoteRequest(name : Text, email : Text, selectedPlan : Text, message : Text) : async Principal {
    let quoteRequest : QuoteRequest = {
      name;
      email;
      selectedPlan;
      message;
      timestamp = 0;
      id = caller;
    };
    quoteRequests.add(caller, quoteRequest);
    caller;
  };

  public query ({ caller }) func getAllQuotes() : async [QuoteRequest] {
    quoteRequests.values().toArray();
  };
};
