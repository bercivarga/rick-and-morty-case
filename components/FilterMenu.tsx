import {
  FormControl,
  FormLabel,
  Input,
  Select,
  IconButton,
  ButtonGroup,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FC, FormEvent, useState } from "react";
import { MdCancel, MdSearch } from "react-icons/md";
import { QueryVars } from "../queries/characters";

type StatusType = "alive" | "dead" | "unknown";
type GenderType = "female" | "male" | "genderless" | "unknown";

const FilterMenu: FC<{
  loading: boolean;
  onSubmit: (filters: QueryVars) => void;
}> = ({ loading, onSubmit }) => {
  const [name, setName] = useState<string>();
  const [status, setStatus] = useState<StatusType>();
  const [species, setSpecies] = useState<string>();
  const [type, setType] = useState<string>();
  const [gender, setGender] = useState<GenderType>();

  const gridColumns = useBreakpointValue({
    base: 1,
    md: 5,
    xl: 6,
  });

  const buttonsSpan = useBreakpointValue({
    base: 1,
    md: 5,
    xl: 1,
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({
      name,
      status,
      species,
      type,
      gender,
    });
  }

  function clearFilters() {
    setName("");
    setStatus(undefined);
    setSpecies("");
    setType("");
    setGender(undefined);
    onSubmit({});
  }

  return (
    <form style={{ width: "100%" }} onSubmit={(e) => handleSubmit(e)}>
      <Grid
        templateColumns={`repeat(${gridColumns}, 1fr)`}
        alignItems="flex-end"
        w="full"
        gap={2}
      >
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl>
            <FormLabel htmlFor="name">Character name</FormLabel>
            <Input
              id="name"
              type="text"
              placeholder="E.g. Morty"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl>
            <FormLabel htmlFor="status">Status</FormLabel>
            <Select
              id="status"
              placeholder="Select option"
              value={status}
              onChange={(e) => setStatus(e.target.value as StatusType)}
            >
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl>
            <FormLabel htmlFor="species">Species</FormLabel>
            <Input
              id="species"
              type="text"
              placeholder="E.g. alien"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl>
            <FormLabel htmlFor="type">Type</FormLabel>
            <Input
              id="type"
              type="text"
              placeholder="E.g. parasite"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl>
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <Select
              id="gender"
              placeholder="Select option"
              value={gender}
              onChange={(e) => setGender(e.target.value as GenderType)}
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="genderless">Genderless</option>
              <option value="unknown">Unknown</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={buttonsSpan}>
          <ButtonGroup fontSize="xl" width="full">
            <IconButton
              type="submit"
              w="full"
              aria-label="search"
              icon={<MdSearch />}
              variant="solid"
              colorScheme="green"
              isLoading={loading}
            />
            <IconButton
              type="button"
              aria-label="clear filters"
              icon={<MdCancel />}
              variant="outline"
              colorScheme="rnmRed"
              disabled={!(name || status || species || type || gender)}
              onClick={() => clearFilters()}
            />
          </ButtonGroup>
        </GridItem>
      </Grid>
    </form>
  );
};

export default FilterMenu;
