module.exports = function(migration) {
  // Entry
  const people = migration
    .createContentType("people")
    .name("people")
    .description("")
    .displayField("labelsIntendedCredit")

  // fields
  people
    .createField("slug")
    .name("slug")
	.type("Symbol")
  people
    .createField("labelsIntendedCredit")
    .name("labelsIntendedCredit")
    .type("Symbol")
	.localized(true)
  people
    .createField("labelsFullName")
    .name("labelsFullName")
    .type("Symbol")
	.localized(true)
  people
    .createField("labelsFullName")
    .name("labelsFullName")
    .type("Symbol")
	.localized(true)
  people
    .createField("labelsEmail")
    .name("labelsEmail")
    .type("Symbol")
	.localized(true)
  people
    .createField("labelsAllowEmail")
    .name("labelsAllowEmail")
    .type("Symbol")
	.localized(true)
  people
    .createField("placeholdersIntendedCredit")
    .name("placeholdersIntendedCredit")
    .type("Symbol")
	.localized(true)
  people
    .createField("placeholdersFullName")
    .name("placeholdersFullName")
    .type("Symbol")
	.localized(true)
  people
    .createField("placeholdersEmail")
    .name("placeholdersEmail")
    .type("Symbol")
	.localized(true)
  people
    .createField("phrasesEmailAlreadyExists")
    .name("phrasesEmailAlreadyExists")
    .type("Symbol")
	.localized(true)
  people
    .createField("phrasesCpfAlreadyExists")
    .name("phrasesCpfAlreadyExists")
    .type("Symbol")
	.localized(true)
  people
    .createField("flashAreYouRegisteredWithEmail")
    .name("flashAreYouRegisteredWithEmail")
    .type("Symbol")
	.localized(true)
  people
    .createField("flashAreYouRegisteredWithCpf")
    .name("flashAreYouRegisteredWithCpf")
    .type("Symbol")
	.localized(true)

  // Appearance
  people.changeEditorInterface("slug", "slugEditor", {})
}
