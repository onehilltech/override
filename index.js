function override (target, name, newFunc) {
  const orig = target[name];

  target[name] = function () {
    // Replace the current _super method with the one for this message.
    const _super = this._super;
    this._super = orig;

    // Call the overridden method.
    const retval = newFunc.call (this, ...arguments);

    // Restore the original super method.
    this._super = _super;

    return retval;
  }
}

override.async = function override__Async (target, name, newFunc) {
  const orig = target[name];

  target[name] = async function () {
    // Replace the current _super method with the one for this message.
    const _super = this._super;
    this._super = orig;

    // Call the overridden method.
    const retval = await newFunc.call (this, ...arguments);

    // Restore the original super method.
    this._super = _super;

    return retval;
  }
}

module.exports = override;