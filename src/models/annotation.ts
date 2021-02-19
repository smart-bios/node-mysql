import  { DataTypes} from 'sequelize'
import db from '../database';

const Annotation = db.define('annotation',{
    specie: {
        type: DataTypes.TINYINT,
    },

    loci_ncbi: {
        type: DataTypes.STRING
    },

    gene_ncbi: {
        type: DataTypes.STRING
    },

    protein_ncbi: {
        type: DataTypes.STRING
    },

    other_id: {
        type: DataTypes.STRING
    },

    preferred_name: {
        type: DataTypes.STRING
    },

    enzyme_code: {
        type: DataTypes.STRING
    },

    gene_ontology: {
        type: DataTypes.STRING
    },
    
    kegg_ko: {
        type: DataTypes.STRING
    },

    kegg_pathway: {
        type: DataTypes.STRING
    },

    desc_eggnog: {
        type: DataTypes.STRING
    },

    desc_ncbi: {
        type: DataTypes.STRING
    }
    

})

export default Annotation