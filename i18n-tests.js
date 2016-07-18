import { chai } from 'meteor/practicalmeteor:chai';
import 'meteor/noorahealth:i18n';

should = chai.should();

describe("Translations", function() {

  it("should translate finish into FINISH in english"), (done)=> {
    TAPi18n.setLanguage("english");
    TAPi18n._("finish").should.equal("FINISH");
  };
        
);
