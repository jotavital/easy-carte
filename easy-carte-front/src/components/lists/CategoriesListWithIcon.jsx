import { Grid, Icon } from "@mui/material";
import CustomLoading from "../misc/CustomLoading";
import RoundedCategoryIcon from "../misc/RoundedCategoryIcon";

function CategoriesListWithIcon({ categories, areCategoriesLoaded }) {
    if (!areCategoriesLoaded) {
        return (
            <Grid container gap padding justifyContent='center'>
                <CustomLoading />
            </Grid>
        )
    } else {
        return (
            <Grid container gap padding justifyContent='center'>
                <RoundedCategoryIcon
                    icon={<Icon>star</Icon>}
                    subtitle='Todas'
                />
                {
                    categories.map((category) => {
                        return <RoundedCategoryIcon
                            key={category.id}
                            categoryId={category.id}
                            icon={<Icon>{category.icon}</Icon>}
                            subtitle={category.name}
                        />
                    })
                }
            </Grid>
        );
    }
}

export default CategoriesListWithIcon;