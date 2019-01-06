module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          zipCode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          favorsGiven: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          favorsTaken: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          isEligible: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
          }
          
    });

    // User.associate = function (models) {
    //     // Associating User with Favors
    //     // When an Author is deleted, also delete any associated Posts
    //     User.hasMany(models.Favor, {
    //         onDelete: "cascade"
    //     });
    // };

    return User;
};