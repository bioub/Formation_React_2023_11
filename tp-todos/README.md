# Exercices

## JSX

Reprendre le HTML suivant et le transformer en JSX dans `App.jsx` :

```
<form class="todos-form">
  <input type="checkbox" class="todos-toggle-checked">
  <input type="text" class="todos-new-input">
  <button>+</button>
</form>
<div class="todos-container"></div>
```

Créer ensuite 3 composants `TodoItem` (remplace `createTodo`), `TodoSpanValue` (remplace `createSpanValue`) et `TodoInputValue` (remplace `createInputValue`) dans les 3 fichiers séparés qui traduit le code suivant (DOM) en JSX :

```
export function createTodo() {
  const rowEl = document.createElement('div');
  rowEl.className = 'todosItem';
  rowEl.dataset.todoId = '123abc';

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = 'todosCompleted';
  checkboxEl.checked = true;

  const spanEl = createSpanValue();

  const buttonEl = document.createElement('button');
  buttonEl.className = 'todosDeleteBtn';
  buttonEl.innerText = '-';

  rowEl.append(checkboxEl, ' ', spanEl, ' ', buttonEl);

  return rowEl;
}

export function createSpanValue() {
  const spanEl = document.createElement('span');
  spanEl.className = 'todosSpanValue';
  spanEl.innerText = 'ABC';
  return spanEl;
}

export function createInputValue() {
  const inputEl = document.createElement('input');
  inputEl.className = 'todosInputValue';
  inputEl.value = 'ABC';
  return inputEl;
}
```

Les innerText sont à remplacer en écrivant au milieu d'une balise JSX
ex: `<button>-</button>`

`rowEl.dataset.todoId` s'écrit comme en HTML : `<div data-todo-id="">`

En JSX, on passe une expression autre qu'une constante de type string comme ceci :

```
<input type="text" checked={true}>
<div>{todo.title}</div>
<input type="text" checked={todo.completed}>
```

Enfin utiliser `TodoItem` 3 fois dans `App`

```
<div class="todos-container">
  <TodoItem />
  <TodoItem />
  <TodoItem />
</div>
```

## Props

Déclarer une prop `todo` dans `TodoItem`.

```
<TodoItem todo={} >
```

Cette prop doit être un objet avec 3 clés :
- `_id` de type `string`
- `title` de type `string`
- `completed` de type `boolean`

Dans `App` passer ensuite un objet d'exemple différent à chaque `<TodoItem />` par exemple :

```
{ _id: 'abcdef1234', title: 'ABC', completed: false }
```

Modifier le code de `TodoItem` de façon à :
- affecter `_id` à `data-todo-id`
- affecter `completed` à la propriété `checked` de la checkbox
- passer `title` en prop de `<TodoSpanValue />`

Déclarer ensuite la prop `title` dans `TodoSpanValue` et l'afficher dans la balise `<span>`

Faire de même pour `TodoInputValue` qui n'est pas encore utilisé.

## JSX conditionnel et listes

Ajouter une prop `isEditing` au composant `TodoItem`, elle doit être optionnelle, de type boolean et avoir en valeur par défault `false`.

Dans le JSX de `TodoItem` si `isEditing` vaut `false`, continuer d'afficher le composant `TodoSpanValue`, par contre si `isEditing` vaut `true` afficher le composant `TodoInputValue`.

Tester depuis `App` que les composants s'affichent correctement si on passe `isEditing={true}` ou `isEditing={false}` à `TodoItem`

Créer dans `App` les 2 variables suivantes :

```
const todos = [
  { _id: 'abcdef1234', title: 'ABC', completed: false },
  { _id: 'dngudtub45', title: 'DEF', completed: true },
  { _id: 'dfgfg35335', title: 'XYZ', completed: false },
];
const editingId = 'dfgfg35335';
```

Transformer le JSX de `App` pour qu'il dépende de ces variables

## Event et State

Modifier `App` de sorte à ce que `todos` soit défini dans un state (avec `useState`)

Ajouter un nouveau state `newTodo` (avec en valeur par défaut `'ABC'`) et passer `newTodo` à la propriété `value` de `<input type="text" className="todos-new-input" />`

Ecouter ensuite avec `onChange` le changement de valeur dans le champ et stocker dans le state `newTodo` (avec `setNewTodo`) la valeur venant de `event.target.value` (cf slide 82)

Au submit du formulaire (`onSubmit`), appeler `event.preventDefault()` pour désactiver le comportement par défaut du navigateur (qui nous emmènerait vers la page de résultat).

Puis utiliser `setTodos` dans le `handleSubmit` pour ajouter un nouvel élement au tableau en s'inspirant du code suivant :

```
setTodos(
  [
    ...todos,
    { /*  un object avec 3 clés : _id (Math.random().toString()), title (la valeur qui venait du champ) et completed  */ }
  ]
)
```

Bonus :

Ecouter le click ou le change de la checkbox :
`<input type="checkbox" className="todos-toggle-checked" />`

Au click cocher/décocher toutes les checkboxes de `TodoItem`.

## Communication inter-composant

### Exercice 1

Dans `TodoItem`, lorsqu'on clique sur le bouton moins, on doit supprimer la todo
du state todos de `App`

Pour celà on va descendre un fonction déclarée dans `App` via les props de `TodoItem`

Au click du bouton moins, appeler cette fonction avec la todo reçue des props

Déclarer une fonction `handleTodoDelete` dans `App`, qui va supprimer du tableau (de manière immuable) la todo reçue en paramètre

Indice: pour supprimer un ou plusieurs élément en immuable vous pouvez utiliser filter du type Array

### Exercice 2

Au double-click de la balise span, remonter jusqu'à App l'id de la todo dans `editingId`

Lorqu'on saisit dans le champs remonter la valeur saisie avec `onTodoEdit`

Ecouter l'événement keydown de l'input, s'il correspond à la touche Entrée, repasser `editingId` à chaine vide `''`