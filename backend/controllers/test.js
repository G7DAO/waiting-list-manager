exports.getTest = (req, res) => {
    return res.send({ data: ["Item1", "Item2", "Item3"] })
}