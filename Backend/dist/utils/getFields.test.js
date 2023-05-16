"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const getFields_1 = require("./getFields");
(0, mocha_1.describe)("the getFields function", () => {
    const mockInfo = {
        fieldNodes: [
            {
                name: {
                    kind: "Name",
                    value: "main field"
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            name: {
                                value: "field without subfields"
                            }
                        },
                        {
                            name: {
                                value: "field with subfields"
                            },
                            selectionSet: {
                                selections: [
                                    {
                                        name: {
                                            value: "subfield"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            name: {
                                value: "second field without subfields"
                            }
                        }
                    ]
                }
            },
            {
                name: {
                    kind: "Name",
                    value: "another main field"
                },
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            name: {
                                value: "another field without subfields"
                            }
                        }
                    ]
                }
            }
        ]
    };
    it("should exist", () => {
        (0, chai_1.expect)(getFields_1.getFields).to.exist;
    });
    it("should accept a GraphQLResolveInfo object", () => {
        const mockInfo = { fieldNodes: [] };
        (0, chai_1.expect)((0, getFields_1.getFields)(mockInfo, "main field")).to.deep.equal({
            attributes: [],
            include: [],
            name: "main field"
        });
    });
    it("should extract the fields from the GraphQLResolveInfo object", () => {
        const result = (0, getFields_1.getFields)(mockInfo, "main field");
        (0, chai_1.expect)(result).to.deep.equal({
            name: "main field",
            attributes: ["field without subfields", "second field without subfields"],
            include: [
                {
                    attributes: ["subfield"],
                    include: [],
                    name: "field with subfields"
                }
            ]
        });
    });
    it("should be able diferentiate from multiple fieldNodes", () => {
        const result = (0, getFields_1.getFields)(mockInfo, "another main field");
        (0, chai_1.expect)(result).to.deep.equal({
            name: "another main field",
            attributes: ["another field without subfields"],
            include: []
        });
    });
});
//# sourceMappingURL=getFields.test.js.map