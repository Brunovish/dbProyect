"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFields = void 0;
const getFields = (info, mainFieldName) => {
    const fieldNode = info.fieldNodes.find((fieldNode) => fieldNode.name.value === mainFieldName);
    const fields = {
        attributes: [],
        include: [],
        name: mainFieldName
    };
    if (fieldNode && fieldNode.selectionSet) {
        fieldNode.selectionSet.selections.forEach((selection) => {
            if (!selection.selectionSet)
                fields.attributes.push(selection.name.value);
            else
                fields.include.push((0, exports.getFields)({ fieldNodes: [selection] }, selection.name.value));
        });
    }
    return fields;
};
exports.getFields = getFields;
//# sourceMappingURL=getFields.js.map