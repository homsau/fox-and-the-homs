module.exports = (sequelize, DataTypes) => {
  const Timeline = sequelize.define('Timeline', {
    id: {
      type: DataTypes.INTEGER,
      auotIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Timeline;
};

// Add field for icons (or hardcode)